import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-serif font-bold text-brand-dark mb-12">Legal & Privacy</h1>
      
      <div className="prose prose-lg max-w-none text-gray-600 font-medium space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Corporate Entity</h2>
          <p>
            Wardline is a registered entity operating as <strong>Wardline Technologies Ltd</strong> (CAC/RC: 1234567). 
            Our principal place of business is 14 Victoria Island, Lagos, Nigeria.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Privacy & Data Handling</h2>
          <p>
            We adhere to the strict guidelines of the Nigerian Data Protection Regulation (NDPR) and international Health Insurance Portability and Accountability Act (HIPAA) equivalents regarding patient data. 
          </p>
          <p>
            All ambient telemetry data processed by our AI is anonymized at the edge. No personally identifiable medical records (PII) leave the tenant's Azure boundary. Data retention policies are dictated by the enterprise tier SLA agreed upon with the hospital network.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Terms of Service</h2>
          <p>
            Wardline is a clinical decision <strong>support</strong> tool. It is not intended to replace the judgment of licensed medical professionals. In the event of a system failure or network outage, hospitals must revert to standard manual triaging and monitoring protocols.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;
