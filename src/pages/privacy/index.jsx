import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Funadiq Trip Planner</title>
      </Helmet>
      <div>
        <header className="h-36 bg-primary-green px-4 md:px-0 bg-[#dcffa0]">
          <div className="flex h-36 items-center justify-center">
            <h2 className="text-4xl">Funadiq Trip Planner - Privacy Policy</h2>
          </div>
        </header>
        <div className="mx-auto mb-20 mt-10 px-4 sm:w-10/12 md:w-6/12 md:px-0">
          <div className="mb-10">
            <p className="mb-5 text-justify">
              Funadiq Trip Planner, Inc., domiciled in Street 146A #58C-56, Bogota,
              Colombia (the “Company”) takes the users (“Users”) privacy very
              seriously. The purpose of this “Privacy Policy” is to explain
              Users how Funadiq Trip Planner may collect, retain, process, share and
              transfer Users personal information in order to provide its
              Services through the website: www.tripplanner.ai.
            </p>
            <p className="mb-5 text-justify">
              For the purposes of this Privacy Policy, Users shall be natural
              (human) persons that request Funadiq Trip Planner’s services.
            </p>
            <p className="mb-5 text-justify">
              By providing Funadiq Trip Planner with their personal data through the
              Website, Users expressly consent the fact that Funadiq Trip Planner may
              process such data in accordance with the terms of this Privacy
              Policy and for the purposes set forth herein.
            </p>
            <p className="mb-5 text-justify">
              Users must read this Privacy Policy before registering or using
              the Services in the Website. By clicking on the “register” button,
              Users state that they have read this Privacy Policy and expressly
              agree to it. In no event Funadiq Trip Planner will collect Personal
              Information from Users without consent and its not voluntarily
              given by them.
            </p>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner reserves the right, at Funadiq Trip Planner’s
              discretion, to change this Privacy Policy from time to time to
              reflect changes to Funadiq Trip Planner’s business or services, or
              applicable laws. For that purpose, Funadiq Trip Planner will provide
              Users with thirty (30) days prior notice for any modification on
              the Privacy Policy page of Funadiq Trip Planner’s Website. Trip Planner
              AI also may notify Users about the modifications using a contact
              information, email or other means of contact if provided by Users.
              The revised Privacy Policy will be effective as of the publication
              date. Users may contact Funadiq Trip Planner if they have questions
              about Funadiq Trip Planner’s privacy practices that are not addressed
              in this Privacy Policy.
            </p>
            <p className="mb-5 text-justify">
              Users agree to provide true and accurate data. Furthermore, they
              shall be solely responsible for any loss or damage that may be
              suffered by Funadiq Trip Planner or any of its subsidiaries or third
              parties as a result of the information provided being false,
              inaccurate, out of date or not genuine.
            </p>
            <p className="text-justify">
              Funadiq Trip Planner respects and is in a constantly effort to be in
              compliance with the European General Data Protection Regulation
              2016/679 (“GDPR”) to protect, warrant and preserve the rights to
              Users to may eventually apply to or be served.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-2xl font-medium">
              1. Who is the Controller in relation to the Personal Information
              Provided by Users?
            </h3>
            <p className="mb-5 text-justify">
              All Personal Information provided or collected through the Website
              will be processed by Funadiq Trip Planner, whose contact information
              can be found below, as file controller.
            </p>
            <div className="mb-5">
              <p>
                <strong>Identity:</strong> Funadiq Trip Planner, Inc
              </p>
              <p>
                <strong>Postal address:</strong> Street 146A #58C-56, Bogota,
                Colombia
              </p>
              <p>
                <strong>Telephone no.:</strong> +1 630 743 6990
              </p>
              <p>
                <strong>Contact Form:</strong>
                <a
                  href="mailto:hello@tripplanner.ai"
                  className="text-tp-purple-2 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  hello@tripplanner.ai
                </a>
              </p>
            </div>
          </div>
          <div className="mb-10">
            <h2 className="mb-4 text-2xl font-medium">
              2. About the Website and Services
            </h2>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner facilitates Users the organization of their trips
              (the “Service” or “Services”). The focus is on helping Users to
              find Activities, Accommodations and Meals in different
              destinations and to facilitate the booking of such recreations
              through a set of questions. Funadiq Trip Planner does not offer any
              guide, tour or touristic services, Funadiq Trip Planner just provides
              Users a Website where they can plan their trips.
            </p>
            <p className="mb-5 text-justify">
              The User understands and accepts that any concept not defined in
              this document may be defined in the Terms and Conditions of
              Service complementary to this Privacy Policy.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-xl font-semibold">
              A) What Information Does Funadiq Trip Planner collect and how is it
              collected?
            </h3>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner processes personal information of Users to offer
              its Service (“Personal Information”).
            </p>
            <p className="mb-5 text-justify">
              In general, User’s and Guide’s Personal Information shall include:
              email, first and last name, local ID and it’s photo. Particularly,
              Funadiq Trip Planner may collect the following information:
            </p>
            <ul className="mb-5 list-disc pl-8">
              <li className="mb-2 list-disc text-justify">
                Registration and use information – When Users use the Services
                by establishing an account through Google (“Account”), Trip
                Planner AI will collect Personal Information as necessary to
                offer the Activities, Accommodations and Meals to Users. Trip
                Planner AI may require Users to provide Funadiq Trip Planner with the
                following Personal Information: email, first and last name,
                local ID and it´s photo. Funadiq Trip Planner reserves the right to
                require Users to provide additional Personal Information.
              </li>
              <li className="mb-2 list-disc text-justify">
                Trip Information: When Users use the Service to optimize their
                travel, Funadiq Trip Planner may require Users to provide Trip
                Planner AI with information regarding their future trips.
                Particularly, Funadiq Trip Planner may collect information about: the
                destination, currency, amount of days, starting and ending dates
                of the trip, ID, language, the results of the itinerary offered
                by Funadiq Trip Planner, User´s location and timezone, browser,
                initial reffer.
              </li>
              <li className="mb-2 list-disc text-justify">
                Additional information that the Users wants to share:
                information that Users provide to Funadiq Trip Planner with other
                purposes. For example, a photograph or a tiktok in order to be
                published in Funadiq Trip Planner´s social networks.
              </li>
              <li className="mb-2 list-disc text-justify">
                Information about the communications made with Funadiq Trip Planner :
                Funadiq Trip Planner will have access to information that Users
                provide for the resolution of doubts or complaints about the use
                of the Website, when Users make such claims through
                <a
                  href="mailto:hello@tripplanner.ai"
                  className="text-tp-purple-2 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  hello@tripplanner.ai.
                </a>
              </li>
              <li className="mb-2 list-disc text-justify">
                Non-Identifying Information: Funadiq Trip Planner also may collect
                other information, such as zip codes, demographic data,
                information regarding the User use of the Service, and general
                project-related data (“Non-Identifying Information”). Trip
                Planner AI may aggregate information collected from Trip Planner
                AI registered and non-registered users. In some cases, Trip
                Planner AI may render Personal Data (generally, email address)
                into a form of non-identifying information referred to in this
                Privacy Policy as “Hashed Information.” This is typically
                accomplished using a mathematical process (commonly known as a
                hash function) to convert information into a code. The code does
                not identify the User directly, but it may be used to connect
                the User activity and interests in the WebSite.
              </li>
            </ul>
            <h3 className="mb-4 text-2xl font-medium">
              Information Received from Third Parties
            </h3>
            <p className="text-justify">
              Third parties may also provide Funadiq Trip Planner with information
              about the User. If Funadiq Trip Planner combines such information with
              information about the User collected through the Service or the
              Website, Funadiq Trip Planner will still process that combined
              information as set forth in this Privacy Policy.
            </p>
            <h3 className="mb-4 mt-8 text-2xl font-medium">
              Information Collected Automatically
            </h3>
            <p className="mb-5 text-justify">
              Like other online companies, Funadiq Trip Planner receives technical
              information when the User uses the Website or the Services. Trip
              Planner AI uses these technologies to analyze how Users use the
              Service, to improve the Website, to save the User log-in
              information for future sessions, and to serve the User with
              advertisements that are of it’s interest.
            </p>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner and its third party service providers, including
              analytics and third party content providers, may automatically
              collect certain information from the User whenever the User
              accesses or interacts with the Service or Website. This
              information may include, among other information, the browser and
              operating system the User is using, the search terms the User
              entered into a search engine that led the User to the Service,
              areas within the Service that the User visited, which links the
              User clicked on, which pages or content the User viewed and for
              how long, other similar information and statistics about the
              User’s interactions, such as content response times, download
              errors and length of visits to certain pages and other information
              commonly shared when browsers communicate with websites. Trip
              Planner AI does this in order to improve Funadiq Trip Planner Services,
              and to improve the Website.
            </p>
            <p className="text-justify">
              In order to perform the Service, the Website may use cookies,
              tracking pixels and related technologies. Cookies are small data
              files that are served by the Website. They enable Funadiq Trip Planner
              to identify Users when they use and navigate through the Website
              in order to serve targeted advertising of Funadiq Trip Planner and
              services to Users.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-xl font-semibold">
              B) What Privacy Choices Are Available To Users ?
            </h3>
            <p className="mb-5 text-justify">
              Users have choices to the privacy practices and communications
              described in this Privacy Policy.
            </p>
            <p className="mb-5 text-justify">
              Choices Relating to the Personal Information Funadiq Trip Planner
              Collect. Personal Information. Users may decline to provide
              Personal Information, but certain Services or all of the Services
              may be unavailable to Users.
            </p>
            <p className="mb-5 text-justify">
              Choices Relating to the Personal Information Funadiq Trip Planner
              Collect. Personal Information. Users may decline to provide
              Personal Information, but certain Services or all of the Services
              may be unavailable to Users.
            </p>
            <p className="mb-5 text-justify">
              Choices Relating to Cookies. Users may have options available to
              manage cookies preferences. For example, Users browser or internet
              device may allow Users to delete, disable, or block certain
              cookies and other tracking technologies. Users may choose to
              enable these options, but doing so may prevent Users from using
              many of the core features and functions of the Service and to
              relegate a better experience. Users may have an option regarding
              the use of cookies and other tracking technologies when they visit
              the Website. For example, Users may be asked if they want the
              Service or the Website to “remember” certain things about them,
              and Funadiq Trip Planner will use cookies and other tracking
              technologies to the extent that Users permit them
            </p>
            <p className="mb-5 text-justify">
              Choices Relating to Registration and Account Information. Users
              have an Account, which he/she/it registers through his/her/it´s
              google email. User may review and edit it´s Personal Information
              through it´s Google´s account. User understands and agrees that
              Funadiq Trip Planner does not have any influence over the modification
              of the User's google account information.
            </p>
            <p className="mb-5 text-justify">
              Choices Relating to Communication. Notices, Alerts and Updates
              from Funadiq Trip Planner :
            </p>
            <p className="mb-5 text-justify">
              Marketing: Funadiq Trip Planner may send to Users marketing content
              about Funadiq Trip Planner, the Website and the Service, as well as the
              products and services of unaffiliated third parties through
              various communication channels, for example, email. Users may opt
              out of these marketing communications by following the
              instructions in the communications they receive.
            </p>
            <p className="text-justify">
              Informational and Other: Funadiq Trip Planner will send communications
              to Users that are required or necessary to send to Users regarding
              the Service, notifications that contain important information and
              other communications that Users request from Funadiq Trip Planner .
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-xl font-semibold">
              C) For What Purpose is the Personal Information Collected?
            </h3>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner has no interest in retaining Personal Information
              about Users for any other purpose than the effectiveness of its
              Service. Funadiq Trip Planner may retain Personal Information to
              fulfill Funadiq Trip Planner ’s legal obligations and for Trip Planner
              AI ’ business purposes. Funadiq Trip Planner may retain Personal
              Information for longer periods than a year and a half. Trip
              Planner AI shall only retain Personal Information for legitimate
              business interests.
            </p>
            <p className="mb-5 text-justify">
              In case Funadiq Trip Planner needs to close an Account, Funadiq Trip Planner
              may take steps to mask Personal Information and other information,
              but Funadiq Trip Planner reserves the possibility to retain and access
              the data for so long as required to comply with applicable laws.
              Funadiq Trip Planner will continue to use and disclose such Personal
              Information in accordance with this Privacy Policy.
            </p>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner collects, processes and discloses Users personal
              data only for specific and limited purposes. For example, to
              provide the Service, to assess and handle any complaints, to
              develop and improve the Service, communication methods and the
              functionality of the Website, to provide personalized services and
              to communications and targeted advertising to Users.
            </p>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner collects, process and discloses Users Personal
              Information for the following purposes:
            </p>
            <ul className="mb-5 list-disc pl-8">
              <li className="mb-2 list-disc text-justify">
                To execute the proposed Services on the Website;
              </li>
              <li className="mb-2 list-disc text-justify">
                To provide Users with their order status, deal with their
                enquiries and requests, and assess and handle any complaints;
              </li>
              <li className="mb-2 list-disc text-justify">
                To process and answer Users inquiries or to contact them to
                answer their questions and/or requests;
              </li>
              <li className="mb-2 list-disc text-justify">
                To develop and improve the Service, communication methods and
                the functionality of the Website;
              </li>
              <li className="mb-2 list-disc text-justify">
                To communicate information to Users and to manage Users
                registration and/or subscription to Funadiq Trip Planner newsletter
                or other communications;
              </li>
              <li className="mb-2 list-disc text-justify">
                To authenticate the identity of individuals contacting Trip
                Planner AI by telephone, electronic means or otherwise;
              </li>
              <li className="mb-2 list-disc text-justify">
                To understand and assess the interests, wants, and changing
                needs of consumers, to improve the Website, current services,
                and/or developing new services;
              </li>
              <li className="mb-2 list-disc text-justify">
                To provide personalized services, communications and targeted
                advertising as well as services recommendations to Users;
              </li>
              <li className="mb-2 list-disc text-justify">
                For direct marketing purposes.
              </li>
              <li className="mb-2 list-disc text-justify">
                To manage risk and protect the Website, the Service, Users from
                fraud by verifying Funadiq Trip Planner ´s and Users identity, and
                helping to detect and prevent fraud and abuse of the Website or
                Services.
              </li>
              <li className="mb-2 list-disc text-justify">
                To manage Funadiq Trip Planner ’s business needs, such as monitoring,
                analyzing, and improving the Services and the Website
                performance and functionality.
              </li>
              <li className="mb-2 list-disc text-justify">
                To comply with Funadiq Trip Planner ’s obligations and to enforce the
                terms of Funadiq Trip Planner ’s Website and Services, including to
                comply with all applicable laws and regulations. Funadiq Trip Planner
                will recommend and encourage Users to comply with all applicable
                regulations regarding data privacy in all applicable
                jurisdictions.
              </li>
            </ul>
            <p className="mb-5 text-justify">
              If Funadiq Trip Planner ’s ownership changes or the majority of its
              assets are acquired by a third party, Users are informed that Trip
              Planner AI will transfer their data to the acquiring organizations
              in order to continue to provide the Service subject to the
              processing of data. The new file controller will inform Users of
              its identification data. Funadiq Trip Planner states that it will
              comply with its duty of information to the relevant supervisory
              authority in the event of such circumstances arising, and it shall
              inform Users of the change of file controller if and when this
              happens.
            </p>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner may share their personal data to third parties
              associated with Funadiq Trip Planner, provided that the Users have
              given their express informed and unequivocal consent for it and is
              aware of the purpose and recipient of such transfer.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-xl font-semibold">D) Profiling</h3>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner uses Users Personal Information to build profiles.
              Funadiq Trip Planner creates profiles by analyzing the information
              about Users online surfing, searching and booking behavior and
              their interactions with Funadiq Trip Planner brand communications by
              building segments (creating groups that have certain common
              characteristics) and by placing Users personal data in one or more
              segments. These segments are used by Funadiq Trip Planner to
              personalize the Website and Funadiq Trip Planner communications to
              Users (such as showing relevant content to them when they use
              Service or in a newsletter to them), and to display relevant
              offers and advertisements on the Website. Funadiq Trip Planner profiles
              the Personal Information where Users have provided consent for
              Funadiq Trip Planner to do so (for example, accepting the Privacy
              Policy, accepting the setting of cookies on their browser online
              or signing up for Funadiq Trip Planner email newsletters).
            </p>
            <p className="mb-5 text-justify">
              Users can withdraw their consent to prevent their Personal
              Information being used this way at any time by unsubscribing to
              the use of their email address if they have signed up to any
              marketing newsletters.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-xl font-semibold">
              E) Do We Share/Transfer Personal Information?
            </h3>
            <p className="mb-5 text-justify">
              Only for the purposes stated in this Privacy Policy and to perform
              the Service, Personal Information may be disclosed by Trip Planner
              AI , when necessary, to authorities, other companies within the
              same Funadiq Trip Planner affiliates, Funadiq Trip Planner ’ partners and to
              other third parties, such as third party service providers used in
              connection with Funadiq Trip Planner Service and services related
              thereto.
            </p>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner may also share non-identifying information with
              third parties. The User have choices as to whether Funadiq Trip Planner
              share the User personal information with third parties.
            </p>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner may share aggregated non-identifying information
              and Funadiq Trip Planner may otherwise disclose non-identifying
              information (including, without limitation, Hashed Information) to
              third parties. Funadiq Trip Planner do not share the User Personal Data
              with third parties for those third parties’ marketing purposes
              unless Funadiq Trip Planner first provide the User with the opportunity
              to opt-in to or opt-out of such sharing.
            </p>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner may also share the information Funadiq Trip Planner
              have collected about the User, including Personal Data, as
              disclosed at the time the User provides it´s Personal Data, with
              the User consent, as otherwise described in this Privacy Policy,
              or in the following circumstances:
            </p>
            <ul className="mb-5 list-disc pl-8">
              <li className="mb-2 list-disc text-justify">
                Service Providers: Funadiq Trip Planner may employ third party
                companies and individuals to facilitate the Service, to provide
                the Service on Funadiq Trip Planner´s behalf, to perform
                Service-related services (e.g., without limitation, maintenance
                services, database management, web analytics and online
                advertising, payment processing, fraud detection and improvement
                of Funadiq Trip Planner’s features) or to assist Funadiq Trip Planner in
                analyzing how the Service is used. These third parties may have
                access to the User Personal Data in order to perform these tasks
                on Funadiq Trip Planner´s behalf.
              </li>
              <li className="mb-2 list-disc text-justify">
                Legal and Investigative Purposes: Funadiq Trip Planner will share
                information with government agencies as required by law in
                response to lawful requests by public authorities, including to
                meet national security or law enforcement requirements and,
                including without limitation, in connection with reporting
                earnings. Funadiq Trip Planner cooperates with government and law
                enforcement officials and private parties to enforce and comply
                with the law. Funadiq Trip Planner will disclose information about
                the User to government or law enforcement officials or private
                parties as Funadiq Trip Planner, in Funadiq Trip Planner´s sole
                discretion, believe necessary or appropriate to respond to
                claims and legal process (including but not limited to
                subpoenas), or, at the request of governmental authorities or
                other third parties conducting an investigation where Trip
                Planner AI determine in Funadiq Trip Planner´s sole discretion the
                disclosure is necessary to (a) protect the property and rights
                of Funadiq Trip Planner or a third party, (b) protect the safety of
                the public or any person, or (c) prevent or stop activity Trip
                Planner AI may consider to be, or pose a risk of being, illegal,
                fraudulent, unethical or legally actionable activity.
              </li>
              <li className="mb-2 list-disc text-justify">
                Internal and Business Transfers: Funadiq Trip Planner may share
                information, including Personal Data, with any current or future
                subsidiaries or affiliates, primarily for business and
                operational purposes, including activities such as IT
                management, for them to provide services to the User, or support
                and supplement the Services Funadiq Trip Planner provides. Trip
                Planner AI may sell, transfer, or otherwise share some or all of
                Funadiq Trip Planner´s assets, including the User personal data, in
                connection with a merger, acquisition, reorganization or sale of
                assets (including, in each case, as part of the due-diligence
                process with any potential acquiring entity) or in the event of
                bankruptcy.
              </li>
            </ul>
            <p className="mb-5 text-justify">
              Because Funadiq Trip Planner is a U.S. company, Funadiq Trip Planner process
              and store the User information in the United States and Trip
              Planner AI´s service providers may process and store it elsewhere.
            </p>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner is a U.S. company. If the User are located outside
              the United States and choose to provide information to Trip
              Planner AI, Funadiq Trip Planner transfers Personal Data to the United
              States for processing, and Funadiq Trip Planner´s service providers may
              process Personal Data in the United States and elsewhere. These
              countries may not have the same data protection laws as the
              country in which the User initially provided the information. When
              Funadiq Trip Planner transfers the User information to the United
              States, Funadiq Trip Planner will protect it as described in this
              Privacy Policy.
            </p>
            <p className="mb-5 text-justify">
              The Service is managed by Funadiq Trip Planner’s team at its
              headquarters in Delaware, United States. Funadiq Trip Planner relies on
              service providers to operate the WebSite and provide the Services.
              These service providers are all located in and process the User´s
              data in the United States. Funadiq Trip Planner does not currently
              market its Services to individuals or businesses outside of the
              United States.
            </p>
            <p className="mb-5 text-justify">
              In some cases, Personal Information may be transferred outside the
              European Union and the European Economic Area (“EU/EEA”),
              including but not limited to, the United States of America. Trip
              Planner AI will only send Personal Information collected within
              the EEA to foreign countries in circumstances such as (i) to
              follow Users instructions, (ii) to comply with a legal duty or,
              (iii) to work with the Users or other touristic service providers
              who propose tours on the Website.
            </p>
            <p className="mb-5 text-justify">
              In such case, such transfers outside the EEA will be performed
              subject to appropriate safeguards and safety measures such as
              standard data protection clauses adopted in respective agreements
              or otherwise approved by the EU Commission in accordance with the
              GDPR.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-xl font-semibold">
              F) How Do We Protect Users' Personal Information?
            </h3>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner maintains technical, physical, and administrative
              security measures designed to provide reasonable protection for
              Users Personal Information against loss, misuse, unauthorized
              access, disclosure, interference and alteration. The security
              measures include information access authorization controls.
              Nevertheless, considering the actual online environment is not
              fully secured, Funadiq Trip Planner shall not guarantee that security
              measures taken will prevent illegally and maliciously operating
              third parties from obtaining access to Users Personal Information
              and the absolute security of that information during its
              transmission or its storage on Funadiq Trip Planner systems. While Trip
              Planner AI is dedicated to securing its systems, the Website and
              Services, Users are responsible for securing and maintaining the
              privacy of their password(s) and Account, registration information
              and verifying that the Personal Information Funadiq Trip Planner
              maintains about the Users is accurate and current. Access to Users
              Personal Information is only permitted among our employees and
              agents on a need-to-know basis and subject to strict contractual
              confidentiality obligations when processed by third-parties.
            </p>
            <p className="mb-5 text-justify">
              As mentioned above, Funadiq Trip Planner has taken the necessary steps
              recommended by the European Commission and the competent authority
              to maintain the required security level, according to the nature
              of the personal data processed and the circumstances of the
              processing, in order to avoid, to the extent possible and always
              in accordance with the state of the art, its alteration, loss or
              unauthorized access or processing.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-xl font-semibold">
              G) Which are the Users´ Rights?
            </h3>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner respects the rights of the Users with regard to
              the protection of personal data. To this end, the User understands
              and accepts that he/she has the following rights:
            </p>
            <ul className="mb-5 list-disc pl-8">
              <li className="mb-2 list-disc text-justify">
                The right to be informed. Users have the right to be provided
                with clear, transparent and easily understandable information
                about how Funadiq Trip Planner uses their Personal Information and
                their rights. Therefore, Funadiq Trip Planner is providing them with
                the information in this policy.
              </li>
              <li className="mb-2 list-disc text-justify">
                The right to access and rectification. Users have the right to
                access, correct or update their Personal Information at any
                time. Users understand that any information related to the
                Account in regard to the modification of User´s data, shall be
                required to Google LLC, organized under the laws of the State of
                Delaware, USA, domiciled in 1600 Amphitheatre Parkway, Mountain
                View, California 94043, United States of America.
              </li>
              <li className="mb-2 list-disc text-justify">
                The right to data portability. The personal data Users have
                provided to Funadiq Trip Planner is portable. This means it can be
                moved, copied or transmitted electronically under certain
                circumstances.
              </li>
              <li className="mb-2 list-disc text-justify">
                The right to be forgotten. Under certain circumstances, Users
                have the right to request that Funadiq Trip Planner delete their
                data. If Users wish to delete the Personal Information Trip
                Planner AI holds about them, please let Funadiq Trip Planner know and
                Funadiq Trip Planner will take reasonable steps to respond to the
                request in accordance with legal requirements. If the Personal
                Information Funadiq Trip Planner collect is no longer needed for any
                purposes and Funadiq Trip Planner are not required by law to retain
                it, Funadiq Trip Planner will do what they can to delete, destroy or
                permanently de-identify it.
              </li>
              <li className="mb-2 list-disc text-justify">
                The right to restrict processing. Under certain circumstances,
                Users have the right to restrict the processing of their
                Personal Information.
              </li>
              <li className="mb-2 list-disc text-justify">
                The right to object. Under certain circumstances, Users have the
                right to object to certain types of processing, including
                processing for direct marketing (i.e., receiving emails from
                Funadiq Trip Planner notifying them or being contacted with varying
                potential opportunities).
              </li>
              <li className="mb-2 list-disc text-justify">
                The right to withdraw consent. If Users have given their consent
                to anything Funadiq Trip Planner does with their personal
                information, they have the right to withdraw their consent at
                any time (although if they do so, it does not mean that anything
                Funadiq Trip Planner has done with their Personal Information with
                their consent up to that point is unlawful). Users can withdraw
                their consent to the processing of their Personal Information at
                any time by contacting Funadiq Trip Planner with the details provided
                below.
              </li>
            </ul>
            <p className="mb-5 text-justify">
              Personal Information subjects may exercise the aforementioned
              rights by sending a written request to Funadiq Trip Planner at
              hello@tripplanner.ai.
            </p>
            <p className="mb-5 text-justify">
              In case Users consider that its rights under the data protection
              laws are infringed, Users may file a complaint with the
              supervisory authority of the Users residence. As an example for
              Europe, Data Protection authorities are independent public
              authorities that supervise, through investigative and corrective
              powers, the application of the data protection law. They provide
              expert advice on data protection issues and handle complaints
              lodged against violations of the General Data Protection
              Regulation (GDPR) and the relevant national laws. There is one in
              each EU Member State. Generally speaking, the main contact point
              for questions on data protection is the Data Protection authority
              in the EU Member State where User or Company is based. To find the
              proper authority User or Company may enter the following link:
              http://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-xl font-semibold">
              H) Retention of Personal Information.
            </h3>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner will keep Users' Personal Information retained for
              [ ] years. The Personal Information may also be retained so that
              Funadiq Trip Planner can continue to improve Users experience through
              the Service. . Funadiq Trip Planner will actively review the hold
              Personal Information and delete it securely, or in some cases
              anonymize it, when there is no longer a legal, business or
              consumer need for it to be retained.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-xl font-semibold">
              I) Links to other WebSites
            </h3>
            <p className="mb-5 text-justify">
              The WebSite contains links to other websites. If the User chooses
              to click on a third party link, the User will be directed to that
              third party’s website. The fact that Funadiq Trip Planner link to a
              website is not an endorsement, authorization or representation of
              Funadiq Trip Planner´s affiliation with that third party, nor is it an
              endorsement of their privacy or information security policies or
              practices. Funadiq Trip Planner does not exercise control over third
              party websites. These other websites may place their own cookies
              or other files on the User computer, collect data or request
              Personal Data from the User. Funadiq Trip Planner encourages the User
              to read the privacy policies or statements of the other websites
              the User visits.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-xl font-semibold">
              K) Shared Information
            </h3>
            <p className="mb-5 text-justify">
              Funadiq Trip Planner restricts access to the User's information to
              authorized employees and contractors and only shares the User's
              personal information with third parties in the following
              circumstances.
            </p>
            <p className="mb-5 text-justify">
              Other Service Providers, Users, Contractors or Vendors: for
              providing the Service with accountants, for analytics and
              reporting, marketing and advertising, auditing, communicating with
              the User, managing Funadiq Trip Planner´s customer database, providing
              the User with reservation services or trip information services
              through third party websites.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-2xl font-medium">
              3. Changes to this Privacy Notice
            </h3>
            <p className="mb-5 text-justify">
              Changes to this Privacy Policy will be posted on this page. If
              Funadiq Trip Planner makes a material change to Funadiq Trip Planner ’
              privacy practices, Funadiq Trip Planner will provide notice on the
              Website and by other contact information User or Users have
              provided.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-2xl font-medium">
              4. Governing law. Disputes
            </h3>
            <p className="mb-5 text-justify">
              This Privacy Policy shall be governed by the law of Delaware,
              United States. Any conflict arising from the interpretation or
              execution of the current Privacy Policy or for any other cause
              will be submitted to Delaware´s applicable laws and to the
              exclusive jurisdiction of the courts of the judicial district of
              Delaware, United States.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-2xl font-medium">5. Contact Us</h3>
            <p className="mb-5 text-justify">
              If Users have any questions or concerns regarding Funadiq Trip Planner
              ’ Privacy Policy, please contact Funadiq Trip Planner . All contacts
              and inquiries related to this Privacy Policy should be addressed
              to
              <a
                href="mailto:hello@tripplanner.ai"
                className="text-red-500 hover:underline ms-1"
                rel="noreferrer"
                target="_blank"
              >
                hello@tripplanner.ai.
              </a>
            </p>
          </div>
          <Link
            className="flex w-fit items-center gap-2 rounded-full bg-[#dcffa0] px-4 py-3 transition-all hover:bg-[#d5ff8e]"
            to="/"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="house"
              className="svg-inline--fa fa-house text-sm size-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              ></path>
            </svg>
            Go back to homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
