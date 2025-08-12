export default function Support() {
  return (
    <section id="support" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl text-deep-marine text-center mb-12">
          Supported by
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <img 
              src="/images/hkstp.png" 
              alt="HKSTP" 
              className="max-h-20 mx-auto object-contain"
            />
          </div>
          <div className="md:col-span-2 text-center">
            <img 
              src="/images/hkust_isd.png" 
              alt="HKUST ISD" 
              className="max-h-20 mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}