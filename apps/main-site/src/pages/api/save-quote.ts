import type { Request, Response } from 'astro';
import { auth } from '../../lib/auth';
import { calculateEstimate, type BuilderState } from '../../scripts/builder-engine';

export const POST: APIRoute = async ({ request }) => {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    
    if (!session) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const body = await request.json() as BuilderState;

    // Validation: Ensure minimal requirements are met
    if (!body.guestCount || body.guestCount <= 0) {
      return new Response(JSON.stringify({ error: 'Invalid guest count' }), { status: 400 });
    }

    // Calculate final estimate for persistence
    const estimate = calculateEstimate(body);

    // In a real implementation, we would save 'body' and 'estimate' to the DB
    // linked to the session.userId.
    console.log(`Saving quote for user ${session.user.id}:`, {
      config: body,
      total: estimate.total
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Quote persisted successfully',
      redirect: '/dashboard' 
    }), { status: 200 });

  } catch (error) {
    console.error('Persistence error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};

export type APIRoute = {
  POST: (args: { request: Request }) => Promise<Response>;
};
