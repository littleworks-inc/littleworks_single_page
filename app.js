const { useState } = React;

const gradientOverlay = React.createElement('div', {
   className: 'absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-slate-50/50 pointer-events-none'
});

const LandingPage = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const services = [
   {
     title: 'Cloud Infrastructure',
     description: 'Expert design and management of scalable cloud architectures',
     details: ['High-availability systems', 'Cost optimization', 'Security compliance', 'Performance monitoring']
   },
   {
     title: 'Cloud Migration',
     description: 'Seamless transition of your workloads to the cloud',
     details: ['Zero-downtime migration', 'Data integrity', 'Risk assessment', 'Post-migration support']
   },
   {
     title: 'DevOps Automation',
     description: 'Streamline your development and operations',
     details: ['CI/CD pipelines', 'Infrastructure as Code', 'Automated testing', 'Monitoring setup']
   },
   {
     title: 'Cloud Security',
     description: 'Protect your cloud infrastructure',
     details: ['Security assessments', 'Compliance management', 'Threat detection', 'Disaster recovery']
   }
 ];

 return React.createElement('div', { className: 'min-h-screen bg-gradient-to-b from-slate-50 to-white' }, [
   React.createElement('nav', { key: 'nav', className: 'fixed w-full bg-white shadow-sm z-50' },
     React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-4' },
       React.createElement('div', { className: 'flex justify-between items-center' },
           React.createElement('div', { className: 'text-2xl font-bold text-gray-800 flex items-center' }, [
               React.createElement('span', { className: 'text-blue-600' }, '</>'),
               React.createElement('span', { className: 'ml-2' }, 'LittleWorks INC')
              ]),
         React.createElement('div', { className: 'hidden md:flex space-x-8' },
           React.createElement('a', { href: '#services', className: 'text-gray-600 hover:text-gray-900' }, 'Services'),
           React.createElement('a', { href: '#about', className: 'text-gray-600 hover:text-gray-900' }, 'About'),
           React.createElement('a', { href: '#contact', className: 'text-gray-600 hover:text-gray-900' }, 'Contact')
         )
       )
     )
   ),
   React.createElement('div', { 
     key: 'hero', 
     className: 'relative pt-24 pb-32 overflow-hidden bg-slate-50' 
   }, [
     React.createElement('div', {
       className: 'absolute inset-0 opacity-10',
       style: {
         backgroundImage: 'radial-gradient(circle at 1px 1px, blue 1px, transparent 0)',
         backgroundSize: '40px 40px'
       }
     }),
     gradientOverlay,
     React.createElement('div', { className: 'max-w-7xl mx-auto px-4 relative z-10' }, [
       React.createElement('div', { className: 'text-center' }, [
         React.createElement('h1', { className: 'text-5xl md:text-6xl font-bold text-gray-900 mb-6' }, [
           'Modern Cloud Solutions',
           React.createElement('span', { className: 'block text-blue-600 mt-2' }, 'for Your Business')
         ]),
         React.createElement('p', { className: 'mt-6 text-xl text-gray-600 max-w-3xl mx-auto' },
           'Transform your business with our enterprise-grade cloud solutions. Scale efficiently, operate securely, and innovate faster.'
         ),
         React.createElement('div', { className: 'mt-10 flex flex-col sm:flex-row gap-4 justify-center' }, [
           React.createElement('a', {
             href: '#contact',
             className: 'px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center'
           }, 'Start Your Journey'),
           React.createElement('a', {
             href: '#services',
             className: 'px-8 py-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center'
           }, 'Explore Services')
         ])
       ])
     ])
   ]),
   React.createElement('section', { 
     key: 'services', 
     id: 'services', 
     className: 'relative py-20 bg-white overflow-hidden' 
   }, [
     React.createElement('div', {
       className: 'absolute inset-0 opacity-5',
       style: {
         backgroundImage: 'linear-gradient(45deg, black 25%, transparent 25%), linear-gradient(-45deg, black 25%, transparent 25%), linear-gradient(45deg, transparent 75%, black 75%), linear-gradient(-45deg, transparent 75%, black 75%)',
         backgroundSize: '20px 20px'
       }
     }),
     React.createElement('div', { className: 'max-w-7xl mx-auto px-4 relative z-10' }, [
       React.createElement('h2', { className: 'text-4xl font-bold text-center mb-4' }, 'Our Services'),
       React.createElement('p', { className: 'text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto' },
         'Comprehensive cloud solutions tailored to your business needs'
       ),
       React.createElement('div', { className: 'grid md:grid-cols-2 gap-8' },
         services.map((service, index) =>
           React.createElement('div', { 
             key: index,
             className: 'p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white'
           }, [
             React.createElement('h3', { className: 'text-xl font-semibold mb-3' }, service.title),
             React.createElement('p', { className: 'text-gray-600 mb-4' }, service.description),
             React.createElement('ul', { className: 'space-y-2' },
               service.details.map((detail, idx) =>
                 React.createElement('li', { 
                   key: idx,
                   className: 'flex items-center text-gray-700'
                 }, [
                   React.createElement('span', { className: 'w-2 h-2 bg-blue-600 rounded-full mr-2' }),
                   detail
                 ])
               )
             )
           ])
         )
       )
     ])
   ]),
   React.createElement('section', { 
     id: 'technology', 
     className: 'relative py-20 bg-gray-50 overflow-hidden' 
   }, [
     gradientOverlay,
     React.createElement('div', { className: 'max-w-7xl mx-auto px-4 relative z-10' },
       React.createElement('h2', { className: 'text-3xl font-bold text-center mb-8' }, 'Our Technology Stack'),
       React.createElement('div', { className: 'grid grid-cols-3 gap-4 max-w-3xl mx-auto' },
         ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes'].map(tech =>
           React.createElement('div', { 
             key: tech,
             className: 'bg-white p-4 rounded-lg shadow-sm text-center font-medium hover:shadow-md transition-shadow' 
           }, tech)
         )
       )
     )
   ]),
   React.createElement('section', { 
     id: 'about', 
     className: 'relative py-20 bg-gray-50 overflow-hidden' 
   }, [
     React.createElement('div', {
       className: 'absolute inset-0 opacity-10',
       style: {
         backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%230066ff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")"
       }
     }),
     gradientOverlay,
     React.createElement('div', { className: 'max-w-7xl mx-auto px-4 relative z-10' }, [
       React.createElement('div', { className: 'text-center mb-12' }, [
         React.createElement('h2', { className: 'text-4xl font-bold mb-4' }, 'About Us'),
         React.createElement('p', { className: 'text-xl text-gray-600 max-w-3xl mx-auto' }, 
           'Empowering businesses with innovative cloud solutions since 2020')
       ]),
       React.createElement('div', { className: 'mt-12 bg-white p-8 rounded-lg shadow-sm' }, [
         React.createElement('h3', { className: 'text-2xl font-bold mb-4' }, 'Why Choose Us'),
         React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' }, [
           React.createElement('div', { className: 'flex items-start' }, [
             React.createElement('span', { className: 'w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2' }),
             React.createElement('p', { className: 'text-gray-600' }, 'Expert team with proven track record in cloud solutions')
           ]),
           React.createElement('div', { className: 'flex items-start' }, [
             React.createElement('span', { className: 'w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2' }),
             React.createElement('p', { className: 'text-gray-600' }, 'Customized solutions for your business needs')
           ]),
           React.createElement('div', { className: 'flex items-start' }, [
             React.createElement('span', { className: 'w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2' }),
             React.createElement('p', { className: 'text-gray-600' }, 'Cost-effective and scalable infrastructure')
           ]),
           React.createElement('div', { className: 'flex items-start' }, [
             React.createElement('span', { className: 'w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2' }),
             React.createElement('p', { className: 'text-gray-600' }, 'Round-the-clock support and monitoring')
           ])
         ])
       ])
     ])
   ]),
   React.createElement('section', { 
     id: 'contact', 
     className: 'relative py-20 bg-white overflow-hidden' 
   }, [
     gradientOverlay,
     React.createElement('div', { className: 'max-w-lg mx-auto px-4 relative z-10' }, [
       React.createElement('h2', { className: 'text-3xl font-bold text-center mb-8' }, 'Get Started'),
       React.createElement('form', { className: 'space-y-6 bg-white p-8 rounded-lg shadow-sm' }, [
         React.createElement('div', null, [
           React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Name'),
           React.createElement('input', {
             type: 'text',
             className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
           })
         ]),
         React.createElement('div', null, [
           React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Email'),
           React.createElement('input', {
             type: 'email',
             className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
           })
         ]),
         React.createElement('div', null, [
           React.createElement('label', { className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        }, 'Message'),
        React.createElement('textarea', {
          rows: 4,
          className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        })
      ]),
      React.createElement('button', {
        type: 'submit',
        className: 'w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors',
        onClick: (e) => {
          e.preventDefault();
          const email = document.querySelector('input[type="email"]').value;
          const name = document.querySelector('input[type="text"]').value;
          const message = document.querySelector('textarea').value;
          
          if (!email || !name || !message) {
            alert('Please fill in all fields');
            return;
          }
          
          const mailtoLink = `mailto:hr@littleworks.ca?subject=${encodeURIComponent(`Website Inquiry from ${name}`)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
          window.location.href = mailtoLink;
        }
       }, 'Send Message')
    ])
  ])
]),
React.createElement('footer', { 
  className: 'bg-gray-800 text-white py-12 relative overflow-hidden' 
}, [
  gradientOverlay,
  React.createElement('div', { className: 'max-w-7xl mx-auto px-4 relative z-10' },
    React.createElement('div', { className: 'grid md:grid-cols-3 gap-8' }, [
      React.createElement('div', null, [
        React.createElement('h3', { className: 'font-bold text-lg flex items-center' }, [
            React.createElement('span', { className: 'text-blue-400' }, '</>'),
            React.createElement('span', { className: 'ml-2' }, 'LittleWorks INC')
          ]),
        React.createElement('p', { className: 'mt-2 text-gray-400' }, 'Your cloud infrastructure partner')
      ]),
      React.createElement('div', null, [
        React.createElement('h3', { className: 'font-bold text-lg' }, 'Quick Links'),
        React.createElement('div', { className: 'mt-2 space-y-2' }, [
          React.createElement('a', { href: '#services', className: 'block text-gray-400 hover:text-white transition-colors' }, 'Services'),
          React.createElement('a', { href: '#contact', className: 'block text-gray-400 hover:text-white transition-colors' }, 'Contact'),
          React.createElement('a', { href: '/privacy-policy.html', className: 'block text-gray-400 hover:text-white transition-colors' }, 'Privacy Policy')
        ])
      ]),
      React.createElement('div', null, [
        React.createElement('h3', { className: 'font-bold text-lg' }, 'Contact'),
        React.createElement('p', { className: 'mt-2 text-gray-400' }, 'hr@littleworks.ca')
      ])
    ])
  )
])
]);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(LandingPage));