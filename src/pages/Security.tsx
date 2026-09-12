import React from 'react';

const Security: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Infrastructure built for HealthTech workloads</h1>
        <p className="text-xl text-gray-500 font-medium">Wardline's AI engine is secured, scaled, and isolated on Microsoft Azure.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        <div className="grid gap-8">
          
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shrink-0">1</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Frontend & Application Layer</h3>
              <p className="text-gray-600 leading-relaxed font-medium">Our clinical dashboards are served globally via <strong>Azure Static Web Apps</strong> with auto-scaling compute, ensuring 99.9% uptime and immediate global CDN delivery for low-latency clinical decisions.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shrink-0">2</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Patient Data Storage</h3>
              <p className="text-gray-600 leading-relaxed font-medium">We utilize <strong>Azure Blob Storage</strong> with strict per-tenant isolated containers. All patient telemetry data is encrypted at rest (AES-256) and in transit, complying with global health data privacy standards.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shrink-0">3</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Clinical AI Engine</h3>
              <p className="text-gray-600 leading-relaxed font-medium">Our proprietary vital-sign risk scoring models are trained and deployed on <strong>Azure Machine Learning</strong> and <strong>Azure OpenAI Service</strong>, providing rapid, secure inference without data leaving the tenant boundary.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shrink-0">4</div>
            <div>
              <h3 className="text-xl font-bold mb-2">High-Volume Compute</h3>
              <p className="text-gray-600 leading-relaxed font-medium">To process 12.4M+ patient observations monthly, we rely on <strong>Azure Kubernetes Service (AKS)</strong> with GPU-accelerated inference, ensuring our system remains responsive even during critical volume spikes.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shrink-0">5</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Identity & Security Operations</h3>
              <p className="text-gray-600 leading-relaxed font-medium">Hospital SSO integration is powered by <strong>Microsoft Entra ID</strong> with Role-Based Access Control (RBAC). <strong>Azure Key Vault</strong> manages all secrets, while <strong>Microsoft Defender for Cloud</strong> and <strong>Azure Monitor</strong> maintain a constant, immutable audit trail of all systemic activity.</p>
            </div>
          </div>

        </div>
        
        <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-2xl flex items-center gap-6">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center font-bold text-brand-dark">✓</div>
          <div>
            <div className="font-bold text-lg mb-1">Microsoft Trusted Partner</div>
            <div className="text-gray-500 font-medium text-sm">Deploy to Azure Static Web Apps: Connect GitHub repo, workflow auto-created, add custom domain wardline.ai</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
