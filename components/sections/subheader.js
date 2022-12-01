export default function Subheader (props) {
    return (
      <>
        <section className='hidden lg:block bg-hero bg-zinc-900 pb-52'>
          
          <div className='max-w-[70rem] mx-auto pt-[5rem]'>
            <div className='pt-36 space-y-5'>
              <h3 className='tracking-wide leading-[7rem] text-[4.8rem] font-mont-heavy text-white'>
                Results focused design &<br></br>
                development agency.
              </h3>
              <p className='text-[1.3rem] max-w-[40rem] font-mont-regular text-white'>
                Extend your team with our high performing specialists or hire us
                to shape your product from scratch. Either way, we’ll get your
                product off the ground and build a momentum for your success.
              </p>
            </div>
          </div>
        </section>
        {/*Header for small devices */}
        <section className='block lg:hidden background-image pb-28'>
          
          <div className='max-w-[78rem] mx-auto pt-[5rem] px-6'>
            <div className='py-3 space-y-5'>
              <h3 className='tracking-wide leading-[4rem] text-5xl font-mont-heavy text-white'>
                Results focused design &<br></br>
                development agency.
              </h3>
              <p className='text-xl max-w-[55rem] font-mont-regular text-white'>
                Extend your team with our high performing specialists or hire us
                to shape your product from scratch. Either way, we’ll get your
                product off the ground and build a momentum for your<br></br> success.
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }