import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import OpenAI from 'openai';

const resend = new Resend(process.env.RESEND_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

interface AssessmentAnswer {
  option: string;
  details?: string;
}

interface AssessmentRequest {
  type: 'uiux' | 'branding' | 'content';
  answers: Record<string, AssessmentAnswer>;
  email: string;
}

// Pre-built assessment templates
const assessmentTemplates = {
  uiux: {
    low_engagement: {
      score: 'needs_improvement',
      recommendations: [
        'Implement user behavior analytics',
        'Conduct A/B testing on key pages',
        'Optimize user journey mapping'
      ]
    },
    high_bounce: {
      score: 'critical',
      recommendations: [
        'Improve page load performance',
        'Enhance above-the-fold content',
        'Optimize mobile responsiveness'
      ]
    },
    poor_conversion: {
      score: 'needs_improvement',
      recommendations: [
        'Simplify conversion funnels',
        'Add social proof elements',
        'Improve call-to-action visibility'
      ]
    }
  },
  branding: {
    // Add your pre-built branding assessments
  },
  content: {
    // Add your pre-built content assessments
  }
};

async function generateAIRecommendations(data: AssessmentRequest) {
  try {
    const prompt = `Based on the following assessment answers for ${data.type}, provide specific, actionable recommendations:

${Object.entries(data.answers)
  .map(([key, value]) => `Question ${key.split('-')[1]}:
- Selected: ${value.option}
${value.details ? `- Additional Context: ${value.details}` : ''}`)
  .join('\n\n')}

Provide recommendations in this JSON format:
{
  "score": "excellent|good|needs_improvement|critical",
  "summary": "Brief overview of the assessment",
  "recommendations": [
    {
      "title": "Recommendation title",
      "description": "Detailed explanation",
      "priority": "high|medium|low",
      "timeframe": "immediate|short-term|long-term"
    }
  ]
}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are an expert consultant providing detailed, actionable recommendations based on assessment answers."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }
    });

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error('AI Recommendation Error:', error);
    // Fallback to pre-built templates if AI fails
    return null;
  }
}

function generateEmailHTML(data: AssessmentRequest, analysis: any) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .section { margin-bottom: 30px; }
          .recommendation { background: #fff; padding: 15px; border-left: 4px solid #0070f3; margin-bottom: 15px; }
          .score { display: inline-block; padding: 5px 10px; border-radius: 15px; font-weight: bold; }
          .excellent { background: #d1fae5; color: #065f46; }
          .good { background: #dbeafe; color: #1e40af; }
          .needs_improvement { background: #fef3c7; color: #92400e; }
          .critical { background: #fee2e2; color: #991b1b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Your ${data.type.toUpperCase()} Assessment Results</h1>
            <p>Thank you for completing the assessment. Here's your personalized analysis.</p>
          </div>

          <div class="section">
            <h2>Overall Assessment</h2>
            <div class="score ${analysis.score}">${analysis.score.replace('_', ' ').toUpperCase()}</div>
            <p>${analysis.summary}</p>
          </div>

          <div class="section">
            <h2>Key Recommendations</h2>
            ${analysis.recommendations.map((rec: any) => `
              <div class="recommendation">
                <h3>${rec.title}</h3>
                <p>${rec.description}</p>
                <p><strong>Priority:</strong> ${rec.priority.toUpperCase()}</p>
                <p><strong>Timeframe:</strong> ${rec.timeframe.replace('-', ' ')}</p>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <h2>Next Steps</h2>
            <p>Would you like to discuss these recommendations in detail? Reply to this email to schedule a consultation.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    const data: AssessmentRequest = await request.json();

    // Generate AI recommendations
    const aiAnalysis = await generateAIRecommendations(data);
    
    // Use pre-built template as fallback if AI fails
    const analysis = aiAnalysis || assessmentTemplates[data.type];

    // Generate and send email
    const emailHtml = generateEmailHTML(data, analysis);

    await resend.emails.send({
      from: 'Assessment Results <assessment@yourdomain.com>',
      to: data.email,
      subject: `Your ${data.type.toUpperCase()} Assessment Results`,
      html: emailHtml,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Assessment completed! Check your email for detailed results.' 
    });

  } catch (error) {
    console.error('Assessment Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process assessment. Please try again.' 
      },
      { status: 500 }
    );
  }
}
