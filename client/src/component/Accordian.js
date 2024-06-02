import { Accordion } from "flowbite-react";


const Accordian = () => {
  return (
    <Accordion >
      <Accordion.Panel >
        <Accordion.Title className="hover:text-primary  text-white bg-primary">Do you store my passwords?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          No, your passwords are never entered into mediakits.com, all connections are done securely through the 1st party authentication window of each platform.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="hover:text-primary text-white bg-primary">Do you sell my data?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We do not, mediakits is a creator-first company. we do not sell user data to brands or 3rd party data companies.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel >
        <Accordion.Title className="hover:text-primary text-white bg-primary">
        How do you calculate engagement rate?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We divide the avg engagement count per post by total followers on that platform to get the average engagement rate.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="hover:text-primary text-white bg-primary">
        Will mediakits help me land brand deals?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Owning a media kit gives you control over your brand, saves you time by automating updates, and increases client confidence by showcasing your audience and experience with verified data.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="hover:text-primary text-white bg-primary">
        How often is my media kit updated?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Media kits are updated weekly for free users. media kits are updated daily for pro users and enterprise users.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default Accordian;
