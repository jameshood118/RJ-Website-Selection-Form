//This is the modal
$('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var clicked_item = button.data('item');

    //Information Variables
    var HP_title = "Home Page Intro";
    var HP1_lead = "<p>A certification of skill - a commitment to serve</p>";
    var HP1_description = "<p>When planning your financial future, many details regarding your money and your life&rsquo;s goals must be addressed. With so much at stake, why not look to someone who is held to the highest ethical and professional standards in the industry, one who you can be confident has the education and experience to assist you with the complex financial needs to plan for your future. When working with me, you and your needs are the focus of the financial planning relationship and drive the recommendations for your overall wealth management approach. And we will be there to help you each step of the way in the pursuit of your financial goals.</p>";
    var HP1_picture = "<img src='images/New/pages/Homepage/HP1_picture.jpg' class='img-responsive'/>";

    var HP2_lead = "<p>A personalized approach to managing wealth</p>";
    var HP2_description = "<p>Managing wealth with an eye toward the future demands vigilance and skill in today&rsquo;s global economy. Over the years, I&rsquo;ve worked with clients and their other professional advisors &ndash; including attorneys and accountants &ndash; to create comprehensive wealth management plans designed to make the best use of their wealth today and help ensure its endurance for future generations. And I&rsquo;ll do the same for you. I can offer you an array of personalized services, support and guidance that can help make a positive difference in the pursuit of your financial goals.</p>";
    var HP2_picture = "<img src='images/New/pages/Homepage/HP2_picture.jpg' class='img-responsive'/>";

    var HP3_lead = "<p>An elevated advisory experience</p>";
    var HP3_description = "<p>We believe that financial advisory services should be shaped by the unique needs of each client we serve, from individuals to families to high-caliber institutions. Our personal approach and robust capabilities enable us to create customized investment solutions and deliver a superior standard of service with every investment solution we present. Whether managing your personal wealth or elevating your business to the next level, our team remains focused on the strategic thinking and opportunities that will help drive you toward success.</p>";
    var HP3_picture = "<img src='images/New/pages/Homepage/HP3_picture.jpg' class='img-responsive'/>";

    var HP4_lead = "<p>Effective Strategies For Powerful Businesses And Institutions</p>";
    var HP4_description = "<p>An organization as selective as yours requires a wealth advisory firm matched in stature. One that understands success means thoughtful accountability for each decision you make. When working with a financial partner to manage your capital, only the most responsible and objective guide will do. Beyond our global resources and unfettered access to sophisticated strategies is a trusted team who can help propel your business forward. We provide expertise and dedication to your needs so you can continue doing great things with your mission in mind.</p>";
    var HP4_picture = "<img src='images/New/pages/Homepage/HP4_picture.jpg' class='img-responsive'/>";

    var HP5_lead = "<p>Experienced guidance - more confident investing</p>";
    var HP5_description = "<p>Having an experienced investment manager can not only help simplify the complexities of your wealth, it can also help simplify your life. Through a disciplined process and investment choices based on your goals, time frame and risk tolerance, I can help not only reduce the many questions that can come with investing, but can also help you identify many opportunities as well &ndash; all in an effort to help make your life easier. I can provide you with investment services and guidance that make the most sense for you and your family. I&rsquo;ll also be there to help you each step of the way as you pursue your personal financial goals.</p>";
    var HP5_picture = "<img src='images/New/pages/Homepage/HP5_picture.jpg' class='img-responsive'/>";

    var HP6_lead = "<p>Invest with experienced guidance</p>";
    var HP6_description = "<p>Preserving capital and managing risk are two important objectives for investors, and in today&rsquo;s global economy, they can be more challenging than ever. Over the years, I&rsquo;ve had the privilege of helping clients manage the complexities of their wealth through carefully constructed portfolios and a strategic combination of traditional investment solutions and more sophisticated investment alternatives. We can offer you an array of personalized investment services, support and guidance that can help make a positive difference as you pursue your financial goals.</p>";
    var HP6_picture = "<img src='images/New/pages/Homepage/HP6_picture.jpg' class='img-responsive'/>";

    var HP7_lead = "<p>Next-level Strategies To Match Any Need</p>";
    var HP7_description = "<p>Our experienced team understands the stewardship required to prudently invest significant assets. As your partner, we craft solutions using our expertise and prudent management approach. For years we&rsquo;ve offered individuals and institutions alike a higher degree of strategic thinking designed to discover new opportunities and help you achieve success. Our robust capabilities cover all aspects of investment management, from investment research to strategy and oversight. Everything you need to raise the bar when it comes to your financial affairs.</p>";
    var HP7_picture = "<img src='images/New/pages/Homepage/HP7_picture.jpg' class='img-responsive'/>";

    var HP8_lead = "<p>Personalized planning for your financial goals</p>";
    var HP8_description = "<p>Your financial goals, aspirations and investment needs are just that &ndash; yours. And your financial plan should reflect that. So rather than ask you to settle for an off-the-shelf investment program, we&rsquo;re here to provide you with personalized financial planning based on your goals, your time frame and your particular tolerance for risk. We can provide you with just the right combination of financial services, support and guidance that make the most sense for you. We&rsquo;ll also be there to help you each step of the way in the pursuit of your personal financial goals.</p>";
    var HP8_picture = "<img src='images/New/pages/Homepage/HP8_picture.jpg' class='img-responsive'/>";

    var HP9_lead = "<p>Pursuing your financial goals with experienced guidance</p>";
    var HP9_description = "<p>Along with challenges, the market also brings new opportunities &ndash; you just have to know where to look and when to take action. Over the years, we&rsquo;ve helped clients navigate through challenging times with purpose and confidence toward their financial goals, and I&rsquo;m here to help you, too. We can offer you an array of personalized financial services, support and guidance that can help make a positive difference in the pursuit of your financial goals.</p>";
    var HP9_picture = "<img src='images/New/pages/Homepage/HP9_picture.jpg' class='img-responsive'/>";

    var HP10_lead = "<p>Serving You. Well.</p>";
    var HP10_description = "<p>You are intimately familiar with your personal or organization&rsquo;s financial objectives. We are steadfastly dedicated to helping you design strategies to help you reach those objectives and more. Together, we are robustly capable of meeting the challenges you face and making progress toward your end goals. As your partner, we offer customized solutions and objective advice well-suited to your needs. Our consultative approach is personal and distinctive to your mission and objectives. In short, our focus is &ndash; and always will be &ndash; on you.</p>";
    var HP10_picture = "<img src='images/New/pages/Homepage/HP10_picture.jpg' class='img-responsive'/>";

    var HP11_lead = "<p>Sophisticated Wealth Management To Serve Your Individual Needs</p>";
    var HP11_description = "<p>The complexities of the financial world require sophisticated investment solutions and a partner to assist you who is as dedicated to pursuing your specific goals as you are. When it comes to managing your investments, our team can help guide you through today&rsquo;s challenging financial landscape with professional skill and can do so with comprehensive plans that align with your specific investment requirements. Our client-focused approach makes the difference between chasing returns versus a personalized experience tailored to you.</p>";
    var HP11_picture = "<img src='images/New/pages/Homepage/HP11_picture.jpg' class='img-responsive'/>";


    var Diff_title = "What Makes Us Different";

    var Diff1_lead = "<p>A collective of expertise, dedicated to your financial success</p>";
    var Diff1_description = "<p>We are a diverse team, united behind our clients&rsquo; goals and driven to help them achieve financial success. Our experience helps us seamlessly integrate with your company, complementing your strengths and incorporating our own gained from years of experience. Working with any of us means you have an office of intellectual capital behind your institution, leveraging our collective experience to provide sound, comprehensive financial guidance.</p><p>We understand our clients&rsquo; needs and passionately pursue strategies designed to weather market changes and stay ahead of inflation. We develop portfolios that are driven toward long-term success by establishing clear risk and return objectives, and take into account your specific needs and constraints.</p><p>We&rsquo;ve found that financial success requires a multifaceted approach, and we aim to support clients with our abundant capabilities and tenured expertise. We combine strategic asset allocation, disciplined portfolio rebalancing and attentive monitoring to achieve this, ensuring investments are consistently aligned with the needs and priorities of your organization.</p><p>We believe in hard work and integrity, conducting thorough and objective research to discover managers with proven track records and a high level of expertise. We access our widespread professional contacts, conduct rigorous due diligence and hold frequent conference calls and visits, all in an effort to ensure the strategies we deploy align with your objectives.</p><p>Taking a collaborative approach and utilizing the full bandwidth of our team&rsquo;s knowledge and experience, we help institutions to navigate evolving markets and stay angled toward long-term success and sustainability.</p>";
    var Diff1_picture = "<img src='images/New/pages/WhatMakesUsDifferent/Diff1_picture.jpg' class='img-responsive'/>";

    var Diff2_lead = "<p>Global resources, focused service, tailored solutions</p>";
    var Diff2_description = "<p>We believe our clients deserve exemplary service, and we are committed to delivering. We pride ourselves on offering the extensive capabilities required to develop tailored financial solutions, with the intimate attention of a boutique firm. Our team seeks to seamlessly integrate with your office, assessing the unique needs and objectives of your institution. We take the time to get to know the principles upheld by your organization, as well as your fiduciary responsibilities, before crafting strategies designed to meet your objectives.</p><p>A superior quality of service requires a disciplined and objective approach. When carefully selecting managers and securities for your investment portfolio, we use our in-depth capabilities to narrow the investment universe to those that match your corporate profile, risk tolerance and preferences. We understand that while growth is important, capital preservation is, too.</p><p>This is what exemplary service looks like for an institution that requires the utmost attention to detail. With your long-term objectives in mind, we prudently monitor and tactically adjust your portfolios as needed, in an effort to consistently add value, preserve capital and align with your objectives. We seek to propel your institution&rsquo;s mission forward, providing critical support and innovative solutions so that you can stay on top of the finer details and see the bigger picture.</p>";
    var Diff2_picture = "<img src='images/New/pages/WhatMakesUsDifferent/Diff2_picture.jpg' class='img-responsive'/>";

    var Diff3_lead = "<p>Tailored service, disciplined strategies, committed guidance</p>";
    var Diff3_description = "<p>It&rsquo;s rare to find a team like ours. Our experienced professionals have been assembled to offer you the depth of resources, expertise and commitment needed to actively manage and preserve your wealth. We take into account your comfort with risk as well as the values you live by, and use those factors to guide the financial plans we implement. In our experience, the best way to develop a financial plan is by getting to know you, your lifestyle, your values and your goals, so that your financial plan is just that &ndash; uniquely yours.</p><p>We dedicate our extensive industry knowledge to implementing thoughtful financial planning, developing strategies to see you through life&rsquo;s most important milestones. We are prudent in managing your assets and carefully selecting investments that match your needs and risk tolerance. Our business is serving you and managing your finances in a way that makes you feel confident about your financial future.</p><p>We pay attention to the details and design financial plans tailored to each individual client. And we choose to overlook most passing trends in favor of those we feel could give you the best chance of reaching your financial and personal milestones. We believe prudently managed wealth serves as a means to get you where you want to go, and we&rsquo;re committed to delivering our best advice to help you get there.</p>";
    var Diff3_picture = "<img src='images/New/pages/WhatMakesUsDifferent/Diff3_picture.jpg' class='img-responsive'/>";

    var Diff4_lead = "<p>Thoughtful service and tailored strategies, with your needs at the center</p>";
    var Diff4_description = "<p>Our business was built to serve you. Collectively, we offer decades of experience, which we dedicate to crafting innovative, thoughtful financial strategies for clients. We take the time to get to know your lifestyle, goals and values, so that we can deliver a plan designed to propel you toward the future you&rsquo;ve envisioned for yourself and your family. Offering the breadth of resources and capabilities of a large corporation, we provide the tailored, attentive service of a small firm.</p><p>When implementing a financial strategy, we leverage the full expertise of our team, conducting thorough research before hand-picking investments that are consistent with your tolerance for risk and are designed to help you achieve your objectives. We offer independent guidance, with your financial needs and preferences at the center of everything we do.</p><p>We advocate for your long-term financial success, through persistent management and on-going guidance. By utilizing the full bandwidth of our firm&rsquo;s knowledge and expertise, we provide the service and counsel necessary to enhance your financial outlook and propel you toward your goals.</p>";
    var Diff4_picture = "<img src='images/New/pages/WhatMakesUsDifferent/Diff4_picture.jpg' class='img-responsive'/>";

    var Diff5_lead = "<p>An experienced team, dedicated to your success</p>";
    var Diff5_description = "<p>Whether you&rsquo;re in need of individual financial counsel or robust institutional strategies, we&rsquo;ve built our business to address the varied needs of our diverse clientele. Our smallest and largest clients deserve our full attention, and we deliver that attentiveness with guidance that&rsquo;s tailored to your unique challenges and objectives. We take the time to get to know your values and long-term goals, carefully crafting plans that support the future you&rsquo;re working toward.</p><p>As a focused and experienced group, we provide the resources and expertise of a large firm, with the consideration and service typically found at a small boutique. We develop strategies with an emphasis on minimizing risk and enhancing long-term success, fortified by thorough, objective investment research and selection.</p><p>We work alongside our clients, ensuring our strategies are consistently angled toward their ideal financial outcome. We see your goals as an extension of our own, and work tirelessly to help you achieve every one of them.</p>";
    var Diff5_picture = "<img src='images/New/pages/WhatMakesUsDifferent/Diff5_picture.jpg' class='img-responsive'/>";

    var Diff6_lead = "<p>An experienced team, united behind your financial well-being</p>";
    var Diff6_description = "<p>Working with any of our advisors means you&rsquo;re working with our entire team. We leverage our collective experience and expertise to ensure you receive the well-rounded guidance and knowledge that has been proven time and again to serve our clients best.</p><p>We&rsquo;ve had the pleasure of working with a range of diverse clients, from large institutions to families and business owners. This agility has allowed our team to hone the skillset required to provide uncompromising financial service.&nbsp;</p><p>We develop tailored portfolios and financial plans, seeking out opportunities from a global vantage point and factoring micro- and macroeconomic conditions to develop plans designed to sustain over the long term. Each strategy we employ is intended to balance growth with the appropriate level of risk, while furthering your financial goals.</p><p>We commit ourselves to thorough research and an intense vetting process, so you know that the investments and managers we recommend offer qualities that enhance your investment portfolio. We tap into our network of professional contacts and hold frequent calls and visits to ensure their approach aligns with our own.</p><p>The advisory relationship should be ongoing, growing stronger with time. We actively manage and monitor portfolios to ensure they stay consistent with your goals, using the original strategy as a guidepost. We commit our full capabilities as a team to your success, united behind the pursuit of your ideal financial future.</p>";
    var Diff6_picture = "<img src='images/New/pages/WhatMakesUsDifferent/Diff6_picture.jpg' class='img-responsive'/>";

    var AboutRJ_title = "About Raymond James";

    var AboutRJ1_lead = "<p>Conservative pragmatic and proud of the way we do business</p>";
    var AboutRJ1_description = "<p>At Raymond James, we have a straightforward approach to doing business. We believe that putting clients&rsquo; needs first is the best way to ensure their success and, in turn, the long-term success of our advisors and the company. We call this our Service 1st<sup>SM</sup> philosophy. With our strong focus on clients and our commitment to supporting those who serve them, we&rsquo;ve become known as the premier alternative to Wall Street, providing the products, services and support of even the largest firms, within an environment that values strong, personal relationships.</p><p>Sticking to our core principles of client first, conservatism, independence and integrity, Raymond James has steadily grown to become one of the largest independent financial services firms in the industry, but our core values ensure we&rsquo;ll never be so big that we don&rsquo;t have time for what matters most: you and your family.</p><p>The markets change, but our values will always be the same. Client first is at our core, supported by conservatism, independence and integrity.</p>";
    var AboutRJ1_picture = "<img src='images/New/pages/AboutRJ/AboutRJ1_picture.jpg' class='img-responsive'/>";

    var AboutRJ2_lead = "<p>Raymond James: Our dedicated partner</p>";
    var AboutRJ2_description = "<p>We put the needs of our clients first. And we chose to partner with Raymond James because we believe the firm is also dedicated to your best interests. The firm delivers industry-leading support, superior client service, and the financial planning and investment resources of a premier financial services company.</p><p>While Raymond James has the resources to match even the largest firms&rsquo; capabilities, our focus is on building close-knit individual relationships based on trust and integrity.</p><p>The firm&rsquo;s culture of independence allows us to work closely with you to create custom solutions to your short- and long-term financial challenges.</p><p>We&rsquo;re honored to partner with a firm whose founding principles of client first, conservatism, independence and integrity remain refreshingly at the forefront, and especially appreciate the priority placed on supporting our relationships with our clients. Those values have helped Raymond James become one of the largest independent financial services firms in our industry, with a long-term track record of stability and growth.</p>";
    var AboutRJ2_picture = "<img src='images/New/pages/AboutRJ/AboutRJ2_picture.jpg' class='img-responsive'/>";

    var OurApproach_title = "Our Approach";
    var OurApproach_accordions = "<strong>Assess</strong><p>As we listen to you, we learn about your objectives, your perspective on risk and your liquidity needs. We then devise a plan to support your personal goals through professional investment management and strategic planning.</p><strong>Create</strong><p>Using the details you have confided in us and our access to high-caliber research and analysis, we narrow down a selection of investments and an allocation tailored to your financial life. We will then present our recommendations and outline the steps needed to implement your plan.</p><strong>Implement</strong><p>Once you have approved the plan, we put it into action by choosing investment vehicle types and services uniquely suited to your needs, goals and risk tolerance. We craft your portfolio carefully, making the most of the choices available to serve your precise situation.</p><strong>Manage</strong><p>After establishing your plan, we continue to monitor its progress toward your objectives and ensure it keeps working for you through all of life&rsquo;s changes, continually updating you and providing ongoing support. We stay abreast of what&rsquo;s ahead, helping you remain equipped for the challenges of tomorrow.</p>";

    var OurApproach1_lead = "<p>Expertise for the big picture and finer details</p>";
    var OurApproach1_description = "<p>Our experienced team serves a variety of clients, playing an important role in your inner circle. Whether we are providing professional investment consulting or complete financial planning, you can rely on us to take care of the big picture and the finer details with an approach that is as disciplined as it is strategic. It all starts with developing a deep understanding of your needs. From there we aim to offer personalized attention, the highest level of service with integrity, and the advocacy needed on your side of the table. Our rigorous process ensures a comprehensive plan.</p>";
    var OurApproach1_picture = "<img src='images/New/pages/OurApproach/OA1_picture.jpg' class='img-responsive'/>";

    var OurApproach2_lead = "<p>Streamlined solutions for a lifetime of needs</p>";
    var OurApproach2_description = "<p>Complicated matters made simple. That is our ultimate goal, the mission that drives us. Bringing clarity and vision to all the financial decisions in your life is simply what we do.</p><p>Whether you&rsquo;re focused on retiring on your own terms or leaving something behind for the next generation, we can help. Our sound, straightforward process leads to practical recommendations designed just for you.</p><p>To help you find the straightest line to achieving your goals, we offer an array of financial planning and investment services. So whatever phase of life you&rsquo;re in &ndash; whatever complexities you may face &ndash; our experienced professionals are equipped to guide you through.</p>";
    var OurApproach2_picture = "<img src='images/New/pages/OurApproach/OA2_picture.jpg' class='img-responsive'/>";

    var OurApproach3_lead = "<p>Guidance for every stage and phase</p>";
    var OurApproach3_description = "<p>You&rsquo;re not afraid to be true to yourself, and neither are we. We can take a different approach to financial planning that focuses on you as an individual.</p><p>How can you strive to preserve and manage your hard-earned wealth? How will your retirement unfold? Do you have enough to last? Through our experience and expertise, we can help you find the answers to these questions and a path toward your financial goals that&rsquo;s right for you.</p><p>Our services are comprehensive and cover all phases of life, from homing in on retirement to planning for your children&rsquo;s education. Whatever the milestone may be, we&rsquo;ll be there to serve you.</p>";
    var OurApproach3_picture = "<img src='images/New/pages/OurApproach/OA3_picture.jpg' class='img-responsive'/>";

    var OurApproach4_lead = "<p>A refined perspective on money management</p>";
    var OurApproach4_description = "<p>Our guiding force is to do what is best for our clients, with a focus on performance. To strive to achieve that, we offer institutional and individual investors a results-oriented approach to professional money management through a variety of investment vehicles and strategies.</p><p>By demonstrating our drive and objectivity and providing service that&rsquo;s personal and responsive, we aim to build a relationship with you for the long term. We work closely with CPAs, attorneys and others professionals to ensure our planning fully aligns with your needs, with services that include portfolio monitoring, asset protection, retirement and estate planning, as well as charitable giving.</p><p>We take care of the due diligence, including in-depth research and analysis of all investments, which allows us to offer you guidance that&rsquo;s proactive instead of reactive. It puts you and your goals at the center of all that we do.</p>";
    var OurApproach4_picture = "<img src='images/New/pages/OurApproach/OA4_picture.jpg' class='img-responsive'/>";

    var OurApproach5_lead = "<p>Planning for an objective point of view</p>";
    var OurApproach5_description = "<p>There&rsquo;s something more powerful than luck or coincidence to help bring financial independence within reach &ndash; planning.</p><p>As professionals dedicated to continuing education and a high standard of ethics, we leave nothing to chance. We coordinate with other trusted professionals to ensure seamless management of your assets with services that range from portfolio management, insurance, tax, estate, retirement planning and beyond.</p><p>The result is a unique plan that has the underpinnings of knowledge required to carry it forward, a plan that is thoroughly researched and vetted, yet flexible and responsive to life&rsquo;s many transitions.</p>";
    var OurApproach5_picture = "<img src='images/New/pages/OurApproach/OA5_picture.jpg' class='img-responsive'/>";

    var OurApproach6_lead = "<p>Truly integrated wealth management</p>";
    var OurApproach6_description = "<p>The complexities that come with significant wealth call for far-reaching care that frees you from the burdensome day-to-day management of your investments. Working closely with a wealth manager experienced in serving distinctive individuals, families and businesses enables you to spend your time where it matters most.</p><p>We tailor our full range of wealth management services to wherever you are in life and your goals at each stage. Through a process that is detailed and time-tested, we go to great lengths to provide a holistic approach of custom financial planning, investment management, charitable giving and tax and estate planning strategies specifically for you.</p><p>As your personal chief financial officers, we coordinate with your other trusted advisors to get a detailed look at every aspect of your life to ensure a holistic approach to serving you.</p>";
    var OurApproach6_picture = "<img src='images/New/pages/OurApproach/OA6_picture.jpg' class='img-responsive'/>";

    var AboutAB_title = "About Alex. Brown";
    var AboutAB1_lead = "<p>Alex. Brown: a legacy of uncompromising service</p>";
    var AboutAB1_description = "<p>Since its founding in 1800, Alex. Brown has embodied a signature approach to wealth management, leveraging our extensive experience, expertise and resources to steadfastly focus on each individual, family and institution we serve. That legacy empowers us to provide a higher degree of investment insight and an uncommon level of customized service as we address our clients&rsquo; diverse and unique needs. As the nation&rsquo;s first investment bank, we are proud of our strong heritage, but we prefer to raise the bar higher.</p><p>Our powerful partnership with Raymond James allows us to continue to provide the breadth and depth of sophisticated services that our distinguished clients demand and deserve, all with state-of-the-art information technology and multilayered account protection. We dedicate ourselves to a client-first approach, focusing on delivering exemplary service and careful counsel. Consistently striving for perfection, our advisors specialize in traditional and alternative investment planning, asset and risk management, investment banking and wealth management. Espousing the highest standards of service and guidance, we take a consultative, thoughtful approach to creating a client experience far beyond the ordinary.</p><h2>A heritage of trusted expertise, spanning two centuries</h2><ul><li>1800 &ndash; Irish-born Alexander Brown emigrates to Baltimore and founds the first investment bank in the United States</li><li>1808 &ndash; Alex. Brown organizes the first initial public offering in the United States, for the Baltimore Water Company</li><li>1824 &ndash; The investment bank issues the first letter of credit for an international traveler</li><li>1827 &ndash; Brown and his son George lead and sponsor the development of the first major American railroad, the Baltimore and Ohio Railroad </li><li>1933 &ndash; Alex. Brown purchases membership in the New York Stock Exchange</li><li>1983 &ndash; The company joins a syndicate group to take Raymond James public </li><li>1990s &ndash; Alex. Brown establishes itself as a leading underwriter, known for highprofile IPOs </li><li>1997 &ndash; At the time of acquisition by Bankers Trust, Alex. Brown is the nation&rsquo;s oldest investment bank, is the No. 6 stock underwriter<sup>1</sup> by total dollar amount of deals and serves 115,000 high-net-worth clients</li><li>1999 &ndash; Deutsche Bank acquires BT Alex. Brown to form Deutsche Bank Alex. Brown, which becomes Private Client Services </li><li>2015 &ndash; Private Client Services comprises 210 client advisors in 16 branches, managing $50 billion in assets </li><li>2016 &ndash; Alex. Brown partners with Raymond James, the nation&rsquo;s seventh largest wealth management firm by assets under management<sup>2</sup></li></ul><p><small><sup>1</sup>Source: Securities Data Corporation</small></p><p><small><sup>2</sup>Source: <em>On Wall Street</em> ranking</small></p>";
    var AboutAB1_picture = "<img src='images/New/pages/AboutAB/AboutAB1_picture.jpg' class='img-responsive'/>";

    var Quote_Title = "Home Page Quote";
    var Quote1 = '<em>"By sowing frugality we reap liberty, a golden harvest."</em> - Agesilaus';
    var Quote2 = '<em>"If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes."</em> - Andrew Carnegie';
    var Quote3 = '<em>"An investment in knowledge pays the best interest"</em> - Benjamin Franklin';
    var Quote4 = '<em>"The essence of investment management is the management of risks, not the management of returns."</em> - Benjamin Graham';
    var Quote5 = '<em>"Learn from the past, set vivid, detailed goals for the future, and live in the only moment of time over which you have any control: now."</em> - Denis Waitley';
    var Quote6 = '<em>"Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort."</em> - Franklin Roosevelt';
    var Quote7 = '<em>"The real pleasure of one&quot;s life is the devotion to a great objective of one&quot;s consideration."</em> - George Bernard Shaw';
    var Quote8 = '<em>"The four most dangerous words in investing are &quot;This time it&quote;s different.&quot;"</em> - John Templeton';
    var Quote9 = '<em>"Wealth can only be accumulated by the earnings of industry and the savings of frugality."</em> - John Tyler';
    var Quote10 = '<em>"The gratification of wealth is not found in mere possession or in lavish expenditure, but in its wise application."</em> - Miguel de Cervantes';
    var Quote11 = '<em>"Riches do not consist in the possession of treasures, but in the use made of them."</em> - Napoleon Bonaparte';
    var Quote12 = '<em>"Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon which we must vigorously act."</em> - Pablo Picasso';
    var Quote13 = '<em>"The art is not in making money, but in keeping it."</em> - Proverb';
    var Quote14 = '<em>"It&quot;s not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for."</em> - Robert Kiyosaki';
    var Quote15 = '<em>"Price is what you pay. Value is what you get."</em> - Warren Buffett';


    //this is the switch statement to determine what to print into the modal pop up
    switch (clicked_item) {
        case "HP1":
            var modal = $(this);
            modal.find('.modal-title').text(HP_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + HP1_lead + "<br/><strong>Content:</strong> " + HP1_description + "<br/><br/>");
            break;
        case "HP2":
            var modal = $(this);
            modal.find('.modal-title').text(HP_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + HP2_lead + "<br/><strong>Content:</strong> " + HP2_description + "<br/><br/>");
            break;
        case "HP3":
            var modal = $(this);
            modal.find('.modal-title').text(HP_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + HP3_lead + "<br/><strong>Content:</strong> " + HP3_description + "<br/><br/>");
            break;
        case "HP4":
            var modal = $(this);
            modal.find('.modal-title').text(HP_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + HP4_lead + "<br/><strong>Content:</strong> " + HP4_description + "<br/><br/>");
            break;
        case "HP5":
            var modal = $(this);
            modal.find('.modal-title').text(HP_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + HP5_lead + "<br/><strong>Content:</strong> " + HP5_description + "<br/><br/>");
            break;
        case "HP6":
            var modal = $(this);
            modal.find('.modal-title').text(HP_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + HP6_lead + "<br/><strong>Content:</strong> " + HP6_description + "<br/><br/>");
            break;
        case "HP7":
            var modal = $(this);
            modal.find('.modal-title').text(HP_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + HP7_lead + "<br/><strong>Content:</strong> " + HP7_description + "<br/><br/>");
            break;
        case "HP8":
            var modal = $(this);
            modal.find('.modal-title').text(HP_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + HP8_lead + "<br/><strong>Content:</strong> " + HP8_description + "<br/><br/>");
            break;
        case "HP9":
            var modal = $(this);
            modal.find('.modal-title').text(HP_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + HP9_lead + "<br/><strong>Content:</strong> " + HP9_description + "<br/><br/>");
            break;
        case "HP10":
            var modal = $(this);
            modal.find('.modal-title').text(HP_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + HP10_lead + "<br/><strong>Content:</strong> " + HP10_description + "<br/><br/>");
            break;
        case "HP11":
            var modal = $(this);
            modal.find('.modal-title').text(HP_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + HP11_lead + "<br/><strong>Content:</strong> " + HP11_description + "<br/><br/>");
            break;
        case "Diff1":
            var modal = $(this);
            modal.find('.modal-title').text(Diff_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + Diff1_lead + "<br/><strong>Content:</strong> " + Diff1_description + "<br/><br/>");
            break;
        case "Diff2":
            var modal = $(this);
            modal.find('.modal-title').text(Diff_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + Diff2_lead + "<br/><strong>Content:</strong> " + Diff2_description + "<br/><br/>");
            break;
        case "Diff3":
            var modal = $(this);
            modal.find('.modal-title').text(Diff_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + Diff3_lead + "<br/><strong>Content:</strong> " + Diff3_description + "<br/><br/>");
            break;
        case "Diff4":
            var modal = $(this);
            modal.find('.modal-title').text(Diff_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + Diff4_lead + "<br/><strong>Content:</strong> " + Diff4_description + "<br/><br/>");
            break;
        case "Diff5":
            var modal = $(this);
            modal.find('.modal-title').text(Diff_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + Diff5_lead + "<br/><strong>Content:</strong> " + Diff5_description + "<br/><br/>");
            break;
        case "Diff6":
            var modal = $(this);
            modal.find('.modal-title').text(Diff_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + Diff6_lead + "<br/><strong>Content:</strong> " + Diff6_description + "<br/><br/>");
            break;
        case "AboutRJ1":
            var modal = $(this);
            modal.find('.modal-title').text(AboutRJ_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + AboutRJ1_lead + "<br/><strong>Content:</strong> " + AboutRJ1_description + "<br/><br/>");
            break;
        case "AboutRJ2":
            var modal = $(this);
            modal.find('.modal-title').text(AboutRJ_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + AboutRJ2_lead + "<br/><strong>Content:</strong> " + AboutRJ2_description + "<br/><br/>");
            break;
        case "AboutAB1":
            var modal = $(this);
            modal.find('.modal-title').text(AboutAB_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + AboutAB1_lead + "<br/><strong>Content:</strong> " + AboutAB1_description + "<br/><br/>");
            break;
        case "OA1":
            var modal = $(this);
            modal.find('.modal-title').text(OurApproach_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + OurApproach1_lead + "<br/><strong>Content:</strong> " + OurApproach1_description + "<br/>" + OurApproach_accordions + "<br/><br/>");
            break;
        case "OA2":
            var modal = $(this);
            modal.find('.modal-title').text(OurApproach_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + OurApproach2_lead + "<br/><strong>Content:</strong> " + OurApproach2_description + "<br/>" + OurApproach_accordions + "<br/><br/>");
            break;
        case "OA3":
            var modal = $(this);
            modal.find('.modal-title').text(OurApproach_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + OurApproach3_lead + "<br/><strong>Content:</strong> " + OurApproach3_description + "<br/>" + OurApproach_accordions + "<br/><br/>");
            break;
        case "OA4":
            var modal = $(this);
            modal.find('.modal-title').text(OurApproach_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + OurApproach4_lead + "<br/><strong>Content:</strong> " + OurApproach4_description + "<br/>" + OurApproach_accordions + "<br/><br/>");
            break;
        case "OA5":
            var modal = $(this);
            modal.find('.modal-title').text(OurApproach_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + OurApproach5_lead + "<br/><strong>Content:</strong> " + OurApproach5_description + "<br/>" + OurApproach_accordions + "<br/><br/>");
            break;
        case "OA6":
            var modal = $(this);
            modal.find('.modal-title').text(OurApproach_title);
            modal.find('.modal-body').html("<strong>Headline:</strong> " + OurApproach6_lead + "<br/><strong>Content:</strong> " + OurApproach6_description + "<br/>" + OurApproach_accordions + "<br/><br/>");
            break;
        case "Quote1":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote1);
            break;
        case "Quote2":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote2);
            break;
        case "Quote3":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote3);
            break;
        case "Quote4":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote4);
            break;
        case "Quote5":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote5);
            break;
        case "Quote6":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote6);
            break;
        case "Quote7":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote7);
            break;
        case "Quote8":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote8);
            break;
        case "Quote9":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote9);
            break;
        case "Quote10":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote10);
            break;
        case "Quote11":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote11);
            break;
        case "Quote12":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote12);
            break;
        case "Quote13":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote13);
            break;
        case "Quote14":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote14);
            break;

        case "Quote15":
            var modal = $(this);
            modal.find('.modal-title').text(Quote_Title);
            modal.find('.modal-body').html(Quote15);
            break;



    }



})
