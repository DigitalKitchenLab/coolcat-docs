import * as React from 'react';
import YouWillLearnCard from 'components/MDX/YouWillLearnCard';
import Image from 'next/image';

function HomepageHero() {
  return (
    <>
      <div className="mt-8 lg:mt-10 mb-0 sm:mt-8 sm:mb-8 lg:mb-6 flex-col sm:flex-row flex grow items-start sm:items-center justify-start mx-auto max-w-4xl">
        <Image
          alt="Mountains"
          src={'/icons/logo.svg'}
          height="100"
          width="100"
          quality={100}
        />
        <div className="flex flex-wrap">
          <h1 className="text-5xl mr-4 -mt-1 flex wrap font-bold leading-tight text-primary dark:text-primary-dark">
            CoolCat Docs
          </h1>
          <div className="inline-flex self-center px-2 mt-1 bg-highlight dark:bg-highlight-dark w-auto rounded text-link dark:text-link-dark uppercase font-bold tracking-wide text-base whitespace-nowrap">
            Beta
          </div>
        </div>
      </div>
      <section className="my-8 sm:my-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
        <div className="flex flex-col justify-center">
          <YouWillLearnCard title="Purchase CoolCat tokens" path="/basics/tutorials/purchase">
            <p>
              Learn how to setup your cryptocurrency wallet and make your first CoolCat purchase
            </p>
          </YouWillLearnCard>
        </div>
        <div className="flex flex-col justify-center">
          <YouWillLearnCard title="Stake your CoolCat tokens" path="/basics/tutorials/staking">
            <p>
              Learn how to earn additional CoolCat tokens with your current amount.
            </p>
          </YouWillLearnCard>
          <YouWillLearnCard title="Participate in Governance" path="/build/tutorials/governance">
            <p>
              Learn how to govern the future of CoolCat. Vote with your wallet, literally.
            </p>
          </YouWillLearnCard>
        </div>
        <div className="flex flex-col justify-center">
          <YouWillLearnCard title="Setup Validator" path="/">
            <p>Learn how to setup and run a validator node for CoolCat.</p>
          </YouWillLearnCard>
        </div>
        <div className="flex flex-col justify-center">
          <YouWillLearnCard title="Create Games" path="/">
            <p>
              Learn how to develop on CoolCat. Create your own cryptocurrency enabled
              video games.
            </p>
          </YouWillLearnCard>
        </div>
      </section>
    </>
  );
}

export default HomepageHero;
