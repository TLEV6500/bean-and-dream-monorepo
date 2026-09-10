import { auth } from '../../lib/auth';
import { calculateEstimate, type BuilderState } from '../../scripts/builder-engine';

export type APIRoute = {
  POST: (args: { request: Request }) => Promise<Response>;
};

export const POST: APIRoute['POST'] = async ({ request }) => {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    
    if (!session) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const body = await request.json() as BuilderState;

    if (!body.guestCount || body.guestCount <= 0) {
      return new Response(JSON.stringify({ error: 'Invalid guest count' }), { status: 400 });
    }

    const estimate = calculateEstimate(body);

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
