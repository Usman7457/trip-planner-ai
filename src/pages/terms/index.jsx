import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Funadiq Trip Planner</title>
      </Helmet>
      <div className="h-36 bg-primary-green px-4 md:px-0 bg-[#dcffa0]">
        <div className="flex h-36 items-center justify-center">
          <h2 className="text-4xl">Funadiq Trip Planner - Terms &amp; Conditions</h2>
        </div>
      </div>
      <div className="mx-auto mb-20 mt-10 px-4 sm:w-10/12 md:w-6/12 md:px-0">
        <div className="mb-10">
          <p className="mb-5 text-justify">
            Welcome to the to the website https://tripplanner.ai/(the “Website”)
            run by Funadiq Trip Planner Inc., domiciled in Street 146A #58C-56,
            Bogota, Colombia (“Funadiq Trip Planner”). The purpose of this Website is
            to assist in the travel planning of its users (hereinafter, the
            "Users").
          </p>
          <p className="mb-5 text-justify">
            These terms and conditions apply exclusively to the relationship
            between Funadiq Trip Planner and its Users.
          </p>
          <p className="mb-5 text-justify">
            BY COMPLETING THE REGISTRATION FORM (THE “REGISTRATION FORM”) WHICH
            EXPRESSES AN INTENT TO USE THE SERVICE (AS DEFINED BELOW), USERS
            AGREE TO HAVE READ AND UNDERSTOOD THE TERMS SET FORTH IN THIS TERMS
            OF USE, INCLUDING THE TERMS OF THE PRIVACY POLICY AS MAY BE AMENDED
            FROM TIME TO TIME (COLLECTIVELY, THE AND AND USERS AGREE TO BE BOUND
            BY THEM AND TO COMPLY WITH ALL APPLICABLE LAWS AND REGULATIONS
            REGARDING THE USE OF THIS WEBSITE AND/OR SERVICE. THESE TERMS APPLY
            TO USERS’ ACTIVITY AND DEFINE USERS’ RIGHTS AND OBLIGATIONS UNDER
            CONTRACT. IF USERS DOES NOT AGREE TO THESE TERMS, PLEASE DO NOT USE
            THIS WEBSITE AND/OR ANY OF THE SERVICES PROVIDED BY FUNADIQ TRIP PLANNER.
          </p>
          <p className="text-justify">
            Funadiq Trip Planner shall never be understood as a tour operator, a
            travel agency, intermediary or a touristic service provider and is
            not subject to the application of any governing organized travel
            contracts and travel agency contracts. Users shall refrain from all
            acts/ communications that state otherwise, or could give such
            impression, towards both Users and third parties. The Services are
            not aimed nor directed to underage children.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">1. THE SERVICES</h3>
          <p className="mb-5 text-justify">
            1.1. Funadiq Trip Planner offers a Website through which Users can
            optimize their travel arrangements free of charge. In particular,
            Funadiq Trip Planner will collaborate with Users in order to generate a
            travel plan to a destination chosen by the User, tailored by the
            User's needs (the "Services"). First, the User shall provide Trip
            Planner AI with the dates of its travel and its destination. In this
            regard, Funadiq Trip Planner shall assist the User with the scheduling
            of:
          </p>
          <ul className="mb-5 list-disc pl-8">
            <li className="mb-2 list-disc text-justify">
              Activities: Users will have the possibility to visualize different
              activities available at its destination. Users shall select a
              minimum number of activities per day and Funadiq Trip Planner shall
              collaborate in the organization and itineraries of the trip based
              on the User's tastes and comforts. For this purpose, Trip Planner
              AI shall take into consideration the User's location and the
              budget allocated by the User for the designated trip;
            </li>
            <li className="mb-2 list-disc text-justify">
              Accommodations: User may provide the address of his or her
              accommodation so that the User's activities can be organized by
              virtue of that location.
            </li>
            <li className="mb-2 list-disc text-justify">
              Meals: User may also organize his/her/its meals according to
              his/her/its tastes and budget, Funadiq Trip Planner may suggest
              different restaurants based on the User's preferences. The User
              shall inform of any dietary restrictions. It should be noted that
              Funadiq Trip Planner shall not be responsible for the consequences that
              the User may suffer as a result of the meals eaten by the User
              subsequent to the planning of his/her/its trip.
            </li>
          </ul>
          <p className="mb-4">1.2 Complementary Services</p>
          <p className="text-justify">
            1.2.1. Social Media: The User will be able to upload different kinds
            of different destinations to which he/she/it intends to go, so that
            Funadiq Trip Planner can organize the trips based on those destinations,
            and best possible way. In this regard, the User warrants that
            he/she/it is authorized to share such content in the best possible
            way. The User will be able to upload different kinds of media to
            share destinations to which he/she/it intends to go, so that Trip
            Planner AI can organize the trips based on those destinations, in
            the best possible way. The User warrants that he/she/it is
            authorized to share such content in the best possible way. Trip
            Planner AI will not keep the tracks of the trips.
          </p>
          <p className="mb-4">1.2.2. Let others inspire from my trip</p>
          <p className="mb-5 text-justify">
            The User may decide to share its trip plan made by Funadiq Trip Planner
            with third parties. By clicking on the corresponding button, the
            User’s trip plan will be shared with third party users who form part
            of the Community Trips tab.
          </p>
          <p className="text-justify">
            1.3. The User understands and accepts that the User is responsible
            for all the decisions he/she/it makes regarding the assigned
            schedule, since it is defined according to the User's needs. The
            User shall be the one who decides to select the Activities, Hotels
            and Meals and shall have no claims against Funadiq Trip Planner in this
            regard.
          </p>
          <p className="text-justify">
            1.4. The Parties agree that the collaboration in the organization of
            the trip may only be carried out for a limited amount of days.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">
            2. ACCESS AND REGISTRATION
          </h3>
          <p className="mb-5 text-justify">
            In order to be an Funadiq Trip Planner User and use the Services, it is
            essential that Users complete the following steps:
          </p>
          <ul className="mb-5 list-disc pl-8">
            <li className="ont-medium text-tp-purple-2 list-disc text-justify">
              Login with it’s google account;
            </li>
            <li className="text-tp-purple-2 list-disc text-justify font-medium hover:underline">
              <a href="/terms">Agree to the Users Terms and Conditions. </a>
            </li>
            <li className="text-tp-purple-2 list-disc text-justify font-medium hover:underline">
              <a href="/privacy">Agree to the Privacy Policy</a>
            </li>
            <li className="text-tp-purple-2 list-disc text-justify font-medium hover:underline">
              <a href="/cookies">Agree to the Cookies Policy.</a>
            </li>
          </ul>
          <p className="mb-5 text-justify">
            2.2. Users warrant that all the information regarding its identity
            and capacity provided to Funadiq Trip Planner is true, accurate and
            complete. In addition, Users undertakes to keep their details
            updated.
          </p>
          <p className="mb-5 text-justify">
            2.3. If a User provides any false, inaccurate or incomplete
            information, documentations or if Funadiq Trip Planner considers that
            there are well founded reasons to doubt the truthfulness, accuracy
            or integrity of such information, Funadiq Trip Planner may deny the
            User’s current or future access to, and use of, the Website or any
            of its contents and/or Services.
          </p>
          <p className="mb-5 text-justify">
            2.4. The User will be able to create an account in Funadiq Trip Planner
            through Google Authenticator (the “Account”).
          </p>
          <p className="text-justify">
            2.5. Users undertake not to disclose the details of their Account or
            allow access thereto to third parties. Users shall be solely
            responsible for any use of such details that may be made by third
            parties, including for statements made on the Website or any other
            action carried out under their Account. Users must immediately
            immediately inform Funadiq Trip Planner, by sending an email to
            <a
              className="text-tp-purple-2 font-medium hover:underline"
              href="mailto:hello@tripplanner.ai"
              rel="noreferrer"
              target="_blank"
            >
              hello@tripplanner.ai
            </a>
            , if their Account is stolen, disclosed or lost.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">3. BOOKING PROCESS</h3>
          <p className="mb-5 text-justify">
            3.1. The User understands and accepts that in order to make
            reservations for Activities, Hotels and/or Restaurants, the User
            shall do it through third-party websites. Notwithstanding the
            aforementioned, the User understands and accepts that if the User is
            referred to third party websites and/or platforms, the legal
            relationship will be established with such third parties and the
            User will have no claim against Funadiq Trip Planner.
          </p>
          <p className="text-justify">
            3.2. In this sense, the User understands and accepts that any
            reservations, cancellations or modifications of its Activities,
            Hotels and/Meals shall be carried out through such third parties.
            Funadiq Trip Planner is not responsible for the reservation or
            cancellation of said Activities, Hotels or Meals, since it is not
            part of is not part of its Services.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">
            4. WARRANTIES AND LIMITATION OF LIABILITIES
          </h3>
          <p className="mb-5 text-justify">
            4.1. Funadiq Trip Planner only provides Users with a Website in order to
            offer the Services, and the corresponding booking channels, in order
            to collaborate with the optimization of the User's travels.
          </p>
          <p className="mb-5 text-justify">
            4.2. The User knows and accepts that when carrying out operations
            with Funadiq Trip Planner, the User does so at his/her/its own risk. In
            no event shall Funadiq Trip Planner be liable for loss of profits, or for
            any other damage and/or harm that the User may have suffered, due to
            the Services provided through the Website.
          </p>
          <p className="mb-5 text-justify">
            4.3. Users claim to know that Funadiq Trip Planner itself does not offer
            any User, tour or touristic services. That means only the User, and
            not Funadiq Trip Planner in any way, is responsible for preparing,
            providing the necessary information about it’s Trip and holding it’s
            Trip properly.
          </p>
          <p className="mb-5 text-justify">
            The role of Funadiq Trip Planner is limited to displaying the information
            about the User’s trips on the Website and facilitating the User to
            organize a trip. Funadiq Trip Planner will have no liability with respect
            to the execution of the booked tours, hotels or restaurants nor with
            respect to the acts, omissions, errors, representations, warranties,
            breaches or negligence of any User or for any personal injuries,
            death, property damage, or other damages or expenses resulting from
            the interactions the User will have with any third party. Trip
            Planner AI will have no liability in the event of any delay,
            cancellation, overbooking, strike, force manure or other causes
            beyond its direct control.
          </p>
          <p className="text-justify">
            4.4. In the unlikely event that Funadiq Trip Planner is found liable for
            any loss or damage that arises out of or is in any way connected
            with the use of the Website or its Services, the total liability of
            Funadiq Trip Planner to the User, its liability will not exceed and is
            limited to the amount of USD 1,000.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">5. USERS OBLIGATIONS</h3>
          <p className="mb-5 text-justify">
            5.1. Users are fully responsible for the proper use of, and access
            to the Website and their account in accordance with the current
            legislation, national or international, of the country from which
            they are using the Website, as well as with the principles of good
            faith, morals, generally accepted customs and public order.
            Specifically, they undertake to diligently comply with these Users
            Terms and Conditions.
          </p>
          <p className="mb-5 text-justify">
            5.2. Users shall refrain from using their account and other Website
            contents for illegal purposes or with illegal results that harm
            third-party rights and interests, or that may in any way damage,
            disable, affect or impair the Website and its contents and Services.
            In addition, they are prohibited from hindering other Users normal
            use or enjoyment of the Website.
          </p>
          <p className="mb-5 text-justify">
            5.3. Any persons who breach the above obligations shall be liable
            for any loss or damage caused by them. Funadiq Trip Planner will accept
            no liability for any consequences, loss or damage that may arise
            from such illegal use or access by third parties.
          </p>
          <p className="mb-5 text-justify">
            5.4. In general, Users undertake, for example but without
            limitation:
          </p>
          <ul className="mb-5 list-disc pl-8">
            <li className="mb-2 list-disc text-justify">
              To refrain from altering or modifying the Website, in full or in
              part, by bypassing, disabling or in any other way tampering with,
              its functions or Services;
            </li>
            <li className="mb-2 list-disc text-justify">
              To refrain from infringing industrial and intellectual property
              rights or the rules on personal data protection;
            </li>
            <li className="mb-2 list-disc text-justify">
              To refrain from using the Website to insult, defame, intimidate or
              harass other Users or attacking their image;
            </li>
            <li className="mb-2 list-disc text-justify">
              To refrain from accessing other Users’ e-mail accounts;
            </li>
            <li className="mb-2 list-disc text-justify">
              To refrain from introducing computer viruses, corrupted files or
              any other software that may cause damage or alterations to Trip
              Planner AI’s or third parties’ contents or systems.
            </li>
          </ul>
          <p className="text-justify">
            5.5. Any User may report another User if he/she/it believes that the
            latter is in breach of these Users Terms and Conditions. Similarly,
            any User may inform Funadiq Trip Planner of any abuse or infringement of
            these terms by sending an email to Funadiq Trip Planner at
            <a
              href="mailto:hello@tripplanner.ai"
              className="text-tp-purple-2 font-medium hover:underline"
              rel="noreferrer"
              target="_blank"
            >
              hello@tripplanner.ai
            </a>
            Funadiq Trip Planner will check such reports as soon as possible and will
            take any steps that it may deem appropriate, reserving the right to
            remove and/or suspend any User from the Website for breach of these
            Users Terms and Furthermore, Funadiq Trip Planner reserves the right to
            remove and/or suspend any message with illegal or offensive content
            without the need for a prior warning or subsequent notification.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">6. INDEMNIFICATION</h3>
          <p className="mb-5 text-justify">
            6.1. To the extent allowed under applicable law, the User agrees to
            defend, indemnify and hold Funadiq Trip Planner harmless from and against
            any claims, lawsuits, investigations, penalties, damages, losses or
            expenses arising out of or relating to any of the following:
          </p>
          <ol className="mb-5 list-decimal pl-8">
            <li className="mb-2 list-disc text-justify">
              Any breach or alleged breach by the User of the present Users
              Terms and Conditions, or the representations and warranties made
              in these Users Terms and Conditions or otherwise agreed between
              the parties;
            </li>
            <li className="mb-2 list-disc text-justify">
              Any violation or alleged violation of applicable legal
              requirements by the User;
            </li>
            <li className="mb-2 list-disc text-justify">
              Any claim by a User or a third party arising out of or relating to
              the preparation and the holding of the Activities, Hotels or
              Meals, including but not limited to, any claims for personal
              injury, death, property damages or other damages or expenses
              resulting from the interactions the User will have with third
              parties;
            </li>
            <li className="mb-2 list-disc text-justify">
              Any claim by a User or a third party arising out of or related to
              the information provided by the User to Funadiq Trip Planner and
              displayed on the Website, inter alia if this information contains
              errors or shall be incomplete, inadequate or misleading (unless
              and only if it is due to the fault of Funadiq Trip Planner in
              publishing the provided information);
            </li>
            <li className="mb-2 list-disc text-justify">
              Any claim by a User or a third party in the event of any delay,
              cancellation, overbooking, strike, force manure or other causes
              beyond the direct control of Funadiq Trip Planner;
            </li>
            <li className="mb-2 list-disc text-justify">
              Any claim arising out of User's misuse of User data, or any
              violation of an applicable data privacy law.
            </li>
          </ol>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">
            7. INTELLECTUAL PROPERTY
          </h3>
          <p className="mb-5 text-justify">
            7.1. All Intellectual Property Rights from, in and to the Website
            and/or the Service and the content on the Website, including, but
            not limited to, inventions, patents and patent applications,
            trademarks, trade names, copyrightable materials, graphics, text,
            designs, specifications, methods, procedures, algorithms, data,
            technical data, interactive features, system scripts, graphics,
            photos, sounds, music, videos, (source and object code), files,
            interface and trade secrets and the like, whether or not registered
            and Funadiq Trip Planner trademarks, service marks and logos contained
            therein (collectively “Intellectual Property”), are solely owned by
            or licensed to Funadiq Trip Planner, and subject to copyright and other
            Intellectual Property rights under applicable law. Except as
            provided herein, User is not granted, either expressly or by
            implication any license or right to use any of the Intellectual
            Property without the prior express written permission of Trip
            Planner AI.
          </p>
          <p className="mb-5 text-justify">
            7.2. Authorizing a User to access the Website does not imply the
            waiver, transfer, licensing or full or partial assignment by Trip
            Planner AI of any intellectual property rights. Deleting, bypassing
            or in any way tampering with the contents of the Funadiq Trip Planner
            Website are all prohibited. In addition, modifying, copying,
            reusing, exploiting, reproducing, publicizing, making second or
            subsequent publications of, uploading files, sending by post,
            transmitting, using, processing or distributing in any way all or
            some of the contents included in the Funadiq Trip Planner Website for
            public or commercial purposes are also prohibited, save with Trip
            Planner AI’s express written authorization or, where applicable,
            that of the owner of the rights concerned.
          </p>
          <p className="mb-5 text-justify">
            7.3. Any User who shares any content of any kind through the Website
            asserts that he/she/it has the necessary rights to do so, releasing
            Funadiq Trip Planner from any liability regarding the content and
            lawfulness of the information supplied. By providing content through
            the Website, Users assign to Funadiq Trip Planner, free of charge and to
            the maximum extent permitted by the current legislation, the
            exploitation rights on the intellectual or industrial property
            arising from such content.
          </p>
          <p className="mb-5 text-justify">
            7.4. The User will be able, if he/she/it wishes, to inform
            his/her/its usernames of the social networks tiktok or Instagram.
            Additionally, the User will have the possibility to send to Trip
            Planner AI, the tiktoks and/or reels that they make regarding the
            Service or use of the Service or trips that have been made under the
            organization predisposed by Funadiq Trip Planner, with the purpose that
            Funadiq Trip Planner can disclose such contents on its social networks
            and/or on the Website. The User authorizes the use of his/her/it’s
            personal image and/or contents by sending them to Funadiq Trip Planner
            through the means that Funadiq Trip Planner makes available for this
            purpose, without this giving rise to any claim against Trip Planner
            AI. Funadiq Trip Planner is not obliged to use the content sent by the
            Users. If applicable, such content shall be used for a certain
            period of time, with the understanding that if the content remains
            in the Funadiq Trip Planner feed of any social network, it shall not be
            understood that the content is being used.
          </p>
          <p className="text-justify">
            Funadiq Trip Planner hereby grants you a non-exclusive, non-transferable,
            royalty-free license to use its trademarks for use in the United
            States, provided that the User is a member of Funadiq Trip Planner and
            for the sole purpose of performing the Tiktok. The User understands
            and agrees that such license shall not be sufficient authorization
            to act on behalf of Funadiq Trip Planner. The User must not take any
            action that would adversely affect the image and reputation of Trip
            Planner AI, or that would bring its ideals and objectives into
            dispute. Furthermore, Funadiq Trip Planner shall have the right to
            require the exclusion of any element that may adversely affect its
            reputation or neutrality or may be inconsistent with its objectives,
            principles, policies or programs. The User shall not use the Trip
            Planner AI trademarks and logos for any use other than that set
            forth herein. The User shall refrain from using and/or requesting
            the registration of trademarks similar or identical to Trip Planner
            AI's trademarks, anywhere in the world, without authorization from
            Funadiq Trip Planner.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">8. DATA PROTECTION</h3>
          <p className="mb-5 text-justify">
            8.1. Funadiq Trip Planner respects Users and Users privacy and is
            committed to protecting the personal and business information that
            User shares with it. Funadiq Trip Planner believes the User has the right
            to know its practices regarding the information Funadiq Trip Planner may
            collect when User hires the Service. Funadiq Trip Planner’s policy and
            practices and the type of information collected, are described in
            the
            <a href="/privacy">Privacy Policy. </a>
          </p>
          <p className="text-justify">
            8.2. Except in cases where the communication of personal data to a
            third party company is required to achieve the above mentioned
            purposes, Funadiq Trip Planner shall refrain from divulging, selling,
            leasing or exchanging the personal data to any company or entity
            other than a company or entity affiliated to Funadiq Trip Planner,
            without the prior explicit approval of the User.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">9. FORBIDDEN ACTIVITIES</h3>
          <p className="mb-5 text-justify">9.1. Users may not:</p>
          <ol className="mb-5 list-decimal pl-8">
            <li className="mb-2 list-disc text-justify">
              Copy, modify, alter, adapt, make available, translate, port,
              reverse engineer, decompile, or disassemble any portion of the
              Website and/or the Service in any way;
            </li>
            <li className="mb-2 list-disc text-justify">
              Interfere with or disrupt the operation of the Website and/or the
              Service, or the servers or networks that host the Website and/or
              the Service or make the Website and/or the Service available, or
              disobey any laws or regulations or requirements, procedures,
              policies, or regulations of such servers and/or networks;
            </li>
            <li className="mb-2 list-disc text-justify">
              Interfere with or violate any other Users’ or Users right to
              privacy or other rights, or harvest or collect data and
              information about other User without their express consent,
              whether manually or with the use of any robot, spider, crawler,
              site search or retrieval application, or other manual or automatic
              device or process to retrieve, index and/or data-mine information;
            </li>
            <li className="mb-2 list-disc text-justify">
              Defame, abuse, harass, stalk, threaten, or otherwise violate the
              legal rights of others, including Users and Users, or include such
              unlawful, hateful, obscene, indecent, or otherwise illegal content
              in the ads, banners banners and/or content posted, transferred or
              uploaded by Users on or through the Website and/or the Service.
            </li>
          </ol>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">
            10. MODIFYING THE TERMS AND CONDITIONS
          </h3>
          <p className="mb-5 text-justify">
            10.1. Funadiq Trip Planner reserves the right, at our discretion, to
            change these Terms and Conditions from time to time to reflect
            changes in our business, the Website or services, or applicable
            laws. For that purpose, Funadiq Trip Planner will provide Users with
            thirty (30) days prior notice by notice in our Website. Website.
            Funadiq Trip Planner also may notify Users of the change by using contact
            information, email or other means. The revised Terms and Conditions
            will be effective as of the published effective date. In case Users
            using the using the Website or services after any changes, Users
            agree to be bound by such modifications or revisions. Nothing in
            these Terms and Conditions shall deemed to confer any third-party
            rights or benefits. Users agree that Funadiq Trip Planner shall not be
            liable to them or to any third-party for any modification,
            suspension, or discontinuance of its Website and/or service.
          </p>
          <p className="mb-5 text-justify">
            10.2. Funadiq Trip Planner is constantly changing and improving the
            Services. Funadiq Trip Planner may add or remove functionalities or
            features which may suspend or stop a Service altogether.
          </p>
          <p className="mb-5 text-justify">
            10.3. Users can stop using the Services at any time. Funadiq Trip Planner
            may also stop providing Services to Users, or add or create new
            limits to their Services at any time.
          </p>
          <p className="text-justify">
            10.4. Funadiq Trip Planner believes that Users own their data and
            preserving their access to such data is important. If Trip Planner
            AI discontinues a Service, where reasonably possible, Trip Planner
            AI will give Users reasonable advance notice and a chance to get
            information out of that Service.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">11. EXTERNAL WEBSITES</h3>
          <p className="mb-5 text-justify">
            11.1. The Website may contain links to third-party applications or
            websites ("External Websites"). These links are provided only as a
            convenience to Users and not as an endorsement by Funadiq Trip Planner of
            the content on such External Websites. When Users access an External
            Website, Funadiq Trip Planner has no control control over its content,
            applications, or services. Funadiq Trip Planner does not make any
            representations regarding the accuracy, quality, or accessibility of
            any External Website or its content or materials. Funadiq Trip Planner
            all all liability for any errors, omissions, violation of
            third-party rights or illegal conduct arising from such External
            Websites.
          </p>
          <p className="text-justify">
            11.2. User thereby acknowledges that Funadiq Trip Planner has no control
            over such External Websites, and User further acknowledges and
            agrees that Funadiq Trip Planner is not responsible for the availability
            of External Websites, and does not endorse and is not responsible or
            liable for any services, content, advertisements, products, or
            materials on or available from External Websites. User further
            acknowledges and agrees that Funadiq Trip Planner shall not be
            responsible or liable, directly or indirectly, for any damage or
            loss whatsoever caused, or alleged to be caused, by or in connection
            with use of or reliance on any services, content, products or other
            materials available on or through any External Websites. Most
            External Websites provide legal documents, including terms of use
            and privacy policy, governing the use of such sites. It is always
            recommended to read such documents carefully. In any case, Trip
            Planner AI reserves the right to stop using any link at any time, at
            its own discretion.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">
            12. CLAIMS AND QUESTIONS
          </h3>
          <p className="text-justify">
            12.1. At any time, Users will have the possibility to ask for help
            to the Funadiq Trip Planner team by using the following email address:
            <a
              href="mailto:hello@tripplanner.ai"
              className="font-medium text-accent-red hover:underline text-red-500 ms-1"
            >
              hello@tripplanner.ai
            </a>
            .
          </p>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-medium">13. FINAL PROVISIONS</h3>
          <p className="mb-5 text-justify">
            13.1. The invalidity or illegality of a provision of the present
            Users Terms and Conditions shall not affect the other provisions of
            the present Users Terms and Conditions. Funadiq Trip Planner and the User
            will agree provision with the same purpose, on the condition that
            the spirit and purpose of the present Users Terms and Conditions is
            affected as little as possible. Provisions of the present Users
            Terms and Conditions are severable, so that the remainder of the
            provisions are unaffected.
          </p>
          <p className="text-justify">
            13.2. The present Users Terms and Conditions shall be governed by
            and construed in accordance with the laws of Delaware, United
            States. Disputes between the parties, which could not be resolved
            amicably, will be adjudicated exclusively by the competent Courts of
            Delaware, United States of America.
          </p>
          <p className="mt-5 text-justify">
            Date of these Users Terms and Conditions: 11/12/2023
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
    </>
  );
};

export default TermsAndConditions;
