// debug-api.js
async function testApi() {
  console.log('🔍 Debugging API Call...\n');
  
  const testData = {
    name: 'Debug Test',
    email: 'debug@test.com',
    subject: 'Test Subject',
    message: 'Testing the API endpoint',
    inquiryType: 'general'
  };
  
  console.log('1. Sending test data:', testData);
  
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    console.log('2. Response status:', response.status, response.statusText);
    
    const text = await response.text();
    console.log('3. Raw response text:', text);
    
    try {
      const json = JSON.parse(text);
      console.log('4. Parsed JSON:', JSON.stringify(json, null, 2));
    } catch (e) {
      console.log('4. Could not parse JSON:', e.message);
    }
    
  } catch (error) {
    console.error('❌ Fetch error:', error.message);
  }
}

testApi();