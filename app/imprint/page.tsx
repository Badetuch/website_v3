import React from 'react';

const Imprint = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-[260px] pt-[110px] px-4 mx-auto max-w-fit content-center text-center">
        <div className="mb-4 leading-none md:text-5xl lg:text-6xl">
          <span className="text-[110px] font-bold">Imprint</span>
          <div className="text-[25px] py-3 tracking-normal leading-8 font-normal max-w-4xl text-second-text">
            If you have any questions, feel free to contact us at 
            <a
              href="mailto:hello@badespeak.net"
              className="text-[#0070F3]"
              style={{ marginLeft: '5px' }}
            >
              hello@badespeak.net
            </a>
          </div>
          <div className="text-[25px] py-3 tracking-normal leading-8 font-normal max-w-4xl text-second-text">
            Elia Noah Hölzel<br />Rosenhof 43<br />64560 Riedstadt
          </div>
        </div>
      </main>
    </div>
  );
};

export default Imprint;
