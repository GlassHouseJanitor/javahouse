'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <a href="#top">
        <Image src="/kdyrgm5 - Imgur.png" alt="Glass House Recovery Logo" width={120} height={120} className="page-logo" />
      </a>

      <section className="hero-gradient min-h-screen flex items-center pt-[144px] lg:pt-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-24 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center md:text-left">
                <span className="text-light">Come As You Are.</span><br />
                <span className="text-accent font-redhat-display-light">Leave As Yourself.</span>
              </h1>
              <p className="text-base sm:text-lg text-light/80 mb-8 max-w-lg mx-auto md:mx-0 text-redhat-display">
                Build a real foundation through creative self-work and evidence-based care. We help you rediscover who you are—and who you’re meant to be.
                <br /><br />You're not broken. You're just ready for something different. Start your path forward—simple, safe, and judgement-free.
                <br /><br />Just a few quick questions to get your journey started.
              </p>
              <div className="flex flex-row gap-3 md:gap-4 md:justify-start">
                <a href="#gh-bottom-form" className="flex-1 md:flex-none md:w-auto btn-accent bg-accent text-white px-6 py-3 text-sm text-center md:px-8 md:py-3 md:text-base rounded-full font-medium">Start Your Journey</a>
                <a href="#programs" className="flex-1 md:flex-none md:w-auto btn-accent border border-accent text-light px-6 py-3 text-sm text-center md:px-8 md:py-3 md:text-base rounded-full font-medium">Our Programs</a>
              </div>
            </div>
            <div className="glass-effect p-6 sm:p-8 rounded-xl mt-8 md:mt-0 relative">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-light font-redhat-display-light text-center gh-form-heading">
                Ready For A Change? <br />Request a Confidential Callback
              </h3>

              <div id="gh-form-container">
                <form className="space-y-4 gh-intake-form">
                  <div>
                    <input name="name" type="text" placeholder="Your Name" required className="w-full bg-secondary/50 border border-slate-600 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none text-redhat-display" />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      pattern="^[^@\s]+@[^@\s]+\.(com|net|org|edu|gov|io)$"
                      placeholder="Email Address"
                      required
                      className="w-full bg-secondary/50 border border-slate-600 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none text-redhat-display"
                      onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please use a valid email that ends in .com, .net, etc.')}
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                  </div>
                  <div>
                    <input
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="^\d{10}$"
                      placeholder="Phone Number (10 digits)"
                      required
                      className="w-full bg-secondary/50 border border-slate-600 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none text-redhat-display"
                      onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Enter a valid 10-digit phone number with no dashes or spaces.')}
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                  </div>
                  <div>
                    <select name="program" required className="w-full bg-secondary/50 border border-slate-600 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none appearance-none text-redhat-display">
                      <option value="">Select Program</option>
                      <option value="PHP">Partial Hospitalization Program</option>
                      <option value="IOP">Intensive Outpatient Program</option>
                      <option value="OP">Outpatient Program</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full btn-accent bg-accent text-white py-3 rounded-lg font-medium">
                    Get Help Now
                  </button>
                </form>
                <p className="text-sm text-light/60 mt-4 text-redhat-display text-center gh-form-hipaa">
                  All information is confidential and protected by HIPAA.
                </p>
              </div>

              <div id="gh-form-thankyou" className="hidden opacity-0 transition-opacity duration-700 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-light font-redhat-display-light mb-4">Thank you for reaching out.</h3>
                <p className="text-light/70 text-redhat-display text-lg">We’ve received your info and will contact you shortly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-center">
            <div className="p-6">
              <div className="stat-number text-4xl font-bold text-accent mb-2 font-redhat-display-light">“Turns out rock bottom has better lighting than expected — </div>
              <div className="text-light/80 uppercase text-3xl tracking-wider text-redhat-display">and the clarity’s unbeatable.”</div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/8irRYlZ - Imgur.jpg')" }}>
        <div className="absolute inset-0 bg-primary opacity-95"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light">Our Treatment Programs <span className="text-accent font-redhat-display-light"></span></h2>
            <p className="text-light/80 max-w-2xl mx-auto text-redhat-display">
              Personalized care tailored to your unique needs. We offer comprehensive treatment at every stage of recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="treatment-card bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:border-accent">
              <div className="h-48 bg-gradient-to-t from-secondary to-highlight flex items-center justify-center">
                <i className="fas fa-hospital text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-light font-redhat-display-light text-center">Partial Hospitalization Program<br />- PHP -</h3>
                <p className="text-light/70 mb-4 text-redhat-display">
                  For those ready to make recovery their top priority. PHP at Glass House runs 6 days a week and gives you the structure and support you need to rebuild—without stepping away from your life entirely.
                </p>
              </div>
            </div>

            <div className="treatment-card bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:border-accent">
              <div className="h-48 bg-gradient-to-t from-secondary to-highlight flex items-center justify-center">
                <i className="fas fa-home text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-light font-redhat-display-light text-center">Intensive Outpatient Program<br />- IOP -</h3>
                <p className="text-light/70 mb-4 text-redhat-display">
                  A more flexible level of care for people learning to balance recovery with work, school, or family. You’ll get powerful tools, group therapy, and individual sessions—all designed to spark real change.
                </p>
              </div>
            </div>

            <div className="treatment-card bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:border-accent">
              <div className="h-48 bg-gradient-to-t from-secondary to-highlight flex items-center justify-center">
                <i className="fas fa-calendar-check text-6xl text-white"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-light font-redhat-display-light text-center">Outpatient Program<br />- OP -</h3>
                <p className="text-light/70 mb-4 text-redhat-display">
                  Once the deeper work is done, OP gives you space to practice what you’ve learned with a safety net. Think of it as the glide path back into everyday life—with people in your corner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Why <span className="text-accent font-redhat-display-light">Glass House?</span></h2>
              <p className="text-light/80 mb-6 text-redhat-display">
                At Glass House Recovery, we understand that addiction is a complex disease requiring comprehensive, individualized treatment. Our luxury facility provides the ideal environment for healing and transformation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="icon-circle flex items-center justify-center h-6 w-6 rounded-full bg-accent text-white">
                      <i className="fas fa-check text-xs"></i>
                    </div>
                  </div>
                  <p className="ml-3 text-light/80 text-redhat-display">
                    <span className="font-medium text-light">Thriving Creativity:</span> We provide an atmosphere that fosters the unique perspectives of a patient to use creativity as a vital tool in their recovery journey.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="icon-circle flex items-center justify-center h-6 w-6 rounded-full bg-accent text-white">
                      <i className="fas fa-check text-xs"></i>
                    </div>
                  </div>
                  <p className="ml-3 text-light/80 text-redhat-display">
                    <span className="font-medium text-light">Cutting-Edge Approach:</span> We consider innovation paramount, integrating the latest research and techniques to provide dynamic and effective care.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="icon-circle flex items-center justify-center h-6 w-6 rounded-full bg-accent text-white">
                      <i className="fas fa-check text-xs"></i>
                    </div>
                  </div>
                  <p className="ml-3 text-light/80 text-redhat-display">
                    <span className="font-medium text-light">Solid Foundation:</span> We equip patients with the necessary tools, skills, and support systems to ensure they're prepared for continued success in their journey.
                  </p>
                </div>
              </div>
              <a href="#gh-bottom-form" className="btn-accent bg-accent text-white px-8 py-3 rounded-full font-medium inline-flex items-center">
                Speak With Our Team <i className="fas fa-chevron-right ml-2 text-sm"></i>
              </a>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl aspect-4:5">
                <Image src="/Vkimy9i - Imgur.jpg" alt="Glass House Recovery Facility Interior or Exterior View" width={500} height={625} className="w-full h-full rounded-xl object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="insurance" className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/gqsX621 - Imgur.jpg')" }}>
        <div className="absolute inset-0 bg-primary opacity-85"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light">Insurance <span className="text-accent font-redhat-display-light">Accepted</span></h2>
            <p className="text-light/80 max-w-2xl mx-auto text-redhat-display">
              We accept the following insurance plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-14">
            <div className="insurance-card p-6 sm:p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left md:max-w-4xl md:mx-auto">
                <ul className="list-disc list-outside pl-6 space-y-4 text-light/80 text-redhat-display custom-indent">
                  <li>All participating Blue Cross Blue Shield plans</li>
                  <li>Cigna</li>
                  <li>Aetna</li>
                  <li>UnitedHealthcare</li>
                  <li>Maryland Medicaid</li>
                  <li>Virginia Medicaid</li>
                </ul>
                <ul className="list-disc list-outside pl-6 space-y-4 text-light/80 text-redhat-display custom-indent">
                  <li>CHAMP VA (with prior auth from provider)</li>
                  <li>Tricare East</li>
                  <li>Others</li>
                  <li>
                    Self Insured Plans? – We can work with most plans that don’t use a set network (like GEHA for federal employees).
                    <br /><br />
                    Not sure if you’re covered?<br />
                    Call us or start the screening—we’ll figure it out with you.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light">Certified <span className="text-accent font-redhat-display-light">To Support Recovery</span></h2>

          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center mt-8 items-center">

            <div className="rounded-l">
              <Image src="/lL4zY6f - Imgur.png" alt="Joint Commission Accreditation Logo" width={127} height={127} className="mx-auto block h-auto w-[127px] max-w-full" />
            </div>

            <div className="rounded-l">
              <Image src="/vN3eoyx - Imgur.png" alt="State Licensing Logo" width={145} height={145} className="mx-auto block h-auto w-[145px] max-w-full" />
            </div>

            <div className="rounded-l">
              <Image src="/uVFI9sF - Imgur.png" alt="Legit Script Logo" width={135} height={135} className="mx-auto block h-auto w-[135px] max-w-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="gh-bottom-form" className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/s2mJOnf - Imgur.jpg')" }}>
        <div className="absolute inset-0 bg-primary opacity-85"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Contact <span className="text-accent font-redhat-display-light">Glass House</span></h2>
              <p className="text-light/80 mb-8 text-redhat-display">
                Reach out to our compassionate admissions team. All inquiries are confidential.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="icon-circle flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-light font-redhat-display-light">Phone</h3>
                    <p className="text-light/80 text-redhat-display">
                      Call/Text: 410.970.4842<br />
                      Fax: 410.941.0156
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="icon-circle flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-light font-redhat-display-light">Email</h3>
                    <p className="text-light/80 text-redhat-display">
                      admissions@glasshouserecovery.com<br />
                      info@glasshouserecovery.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="icon-circle flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-light font-redhat-display-light">Location</h3>
                    <p className="text-light/80 text-redhat-display">
                      8318 Forrest St<br />
                      Suite 100<br />
                      Ellicott City, MD 21043
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-xl relative">
              <h3 className="text-2xl font-bold mb-6 text-light font-redhat-display-light text-center gh2-form-heading">Want to find a better way? <br />Leave Your Info And We'll Be In Touch</h3>

              <div id="gh2-form-container">
                <form className="space-y-4 gh-intake-form-2">
                  <div>
                    <input name="name" type="text" placeholder="Your Name" required className="w-full bg-secondary/50 border border-slate-600 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none text-redhat-display" />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      pattern="^[^@\s]+@[^@\s]+\.(com|net|org|edu|gov|io)$"
                      placeholder="Email Address"
                      required
                      className="w-full bg-secondary/50 border border-slate-600 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none text-redhat-display"
                      onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please use a valid email that ends in .com, .net, etc.')}
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                  </div>
                  <div>
                    <input
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="^\d{10}$"
                      placeholder="Phone Number (10 digits)"
                      required
                      className="w-full bg-secondary/50 border border-slate-600 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none text-redhat-display"
                      onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Enter a valid 10-digit phone number with no dashes or spaces.')}
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                  </div>
                  <div>
                    <select name="program" required className="w-full bg-secondary/50 border border-slate-600 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none appearance-none text-redhat-display">
                      <option value="">Select Program</option>
                      <option value="PHP">Partial Hospitalization Program</option>
                      <option value="IOP">Intensive Outpatient Program</option>
                      <option value="OP">Outpatient Program</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full btn-accent bg-accent text-white py-3 rounded-lg font-medium">Get Help Now</button>
                </form>
                <p className="text-sm text-light/60 mt-4 text-redhat-display text-center gh2-form-hipaa">
                  All information is confidential and protected by HIPAA.
                </p>
              </div>

              <div id="gh2-form-thankyou" className="hidden opacity-0 transition-opacity duration-700 flex flex-col justify-center items-center text-center min-h-[400px]">
                <h3 className="text-2xl sm:text-3xl font-bold text-light font-redhat-display-light mb-4">Thank you for reaching out.</h3>
                <p className="text-light/70 text-redhat-display text-lg">We’ve received your info and will contact you shortly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button id="back-to-top" title="Back to Top" className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-highlight focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-opacity-50 z-50">
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}