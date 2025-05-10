import Link from 'next/link';

export default function SimpleContact() {
  return (
    <div className="min-h-screen bg-soft-white">
      <header className="p-4 bg-midnight text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Fxsion</h1>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-gold">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold">About</Link></li>
              <li><Link href="/skills" className="hover:text-gold">Skills</Link></li>
              <li><Link href="/projects" className="hover:text-gold">Projects</Link></li>
              <li><Link href="/testimonials" className="hover:text-gold">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto p-4 mt-8">
        <h2 className="text-3xl font-bold text-midnight mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-8">
          Let's discuss how I can help you achieve your digital transformation goals
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-midnight mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-midnight mb-1">Name</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-midnight mb-1">Email</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-midnight mb-1">Message</label>
                <textarea rows={4} className="w-full p-2 border rounded"></textarea>
              </div>
              <button className="bg-midnight text-white px-4 py-2 rounded hover:bg-opacity-90">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-midnight mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-600">hello@fxsion.com</p>
              </div>
              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-gray-600">Lagos, Nigeria</p>
              </div>
              <div>
                <h4 className="font-bold">Business Hours</h4>
                <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 