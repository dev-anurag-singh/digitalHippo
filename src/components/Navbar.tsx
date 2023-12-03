import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Icons } from './Icons';
import NavItems from './NavItems';
import { buttonVariants } from './ui/button';
import Cart from './Cart';

function Navbar() {
  const user = null;

  return (
    <div className='bg-background sticky z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-background'>
        <MaxWidthWrapper>
          <div className='border-b'>
            <div className='flex h-16 items-center'>
              {/* TODO: Mobile nav */}

              <div className='ml-4 flex lg:ml-0'>
                <Link href='/'>
                  <Icons.logo className='h-10 w-10' />
                </Link>
              </div>
              <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                <NavItems />
              </div>
              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  {user ? (
                    <p></p>
                  ) : (
                    <>
                      <Link
                        href='/sign-in'
                        className={buttonVariants({
                          variant: 'ghost',
                        })}
                      >
                        Sign in
                      </Link>
                      <span className='h-6 w-px bg-border' aria-hidden='true' />
                      <Link
                        href='/sign-up'
                        className={buttonVariants({
                          variant: 'ghost',
                        })}
                      >
                        Create account
                      </Link>
                    </>
                  )}
                  <span className='h-6 w-px bg-border' aria-hidden='true' />
                  <div className='ml-4 flow-root lg:ml-6'>
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}

export default Navbar;
