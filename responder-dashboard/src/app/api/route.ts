// app/api/webhook/route.js
import { NextResponse } from 'next/server';

export async function POST(request: { json: () => any; }) {
  try {
    // Parse the incoming request's JSON data
    const data = await request.json();
    console.log('Received data from Zapier:', data);

    // Process the data as needed
    const incidentType = data.incident_type;
    const location = data.location;
    const time = data.time;
    const description = data.description;
    const Suggestions = data.suggestion;

    // Respond with a success message
    return NextResponse.json({ message: 'Data received successfully!' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Failed to process data' }, { status: 500 });
  }
}
