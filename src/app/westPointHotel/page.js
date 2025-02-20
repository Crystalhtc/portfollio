"use client";
import styles from "./Remedify.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppIntro from "../components/AppIntro";
import AppFeature1 from "../components/AppFeature1";
import AppFeature2 from "../components/AppFeature2";
import UserResearch from "../components/UserResearch";
import ContentSection from "../components/ContentSection";
import NextCard from "../components/NextCard";
import ScrollButton from "../components/ScrollButton";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";

export default function Remedify() {
  return (
    <div className={styles.page}>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <img
              src="/westPointHotel/banner.png"
              alt="Remedify"
              className={styles.heroImage}
              priority="true"
            />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.sideMenu}>
            <SideMenu />
          </div>

        <div className={styles.contentFullWidth}>
          <TopMenu />
          <div className={styles.content}>
            <div className={styles.appIntro} id="app-intro">
              <AppIntro 
                appName="West Point Hotel"
                description="The West Point Hotel website project was designed to provide an immersive digital experience that reflects the elegant and contemporary architecture of the hotel itself. West Point Hotel is a modern Caribbean escape tailored for adult couples, business retreats, and weddings. Our goal was to create a platform that not only showcases the stunning beauty and high-end amenities of the hotel but also offers seamless, intuitive navigation for effortless booking."
                role="UX/UI Design, UX Research, Graphic Design, Usability Testing, Competitive Analysis, Frontend Development"
                tools="Figma, Adobe Illustrator, WordPress"
                duration="Feb 2024 – May 2024 (3 months)"
                prototypeLink="https://www.figma.com/proto/EOZx56ArPGxKOZS4uGsBKw/West-Point-Hotel?node-id=1263-5979&t=mvRqjShpbuNtjqAH-1&scaling=scale-down-width&content-scaling=fixed&page-id=1263%3A4573&starting-point-node-id=1263%3A5979"
                figmaLink="https://www.figma.com/design/EOZx56ArPGxKOZS4uGsBKw/West-Point-Hotel?node-id=1263-4573&t=GN6VlNZdbgBVB8M5-1"
                styleguideLink="https://www.figma.com/design/EOZx56ArPGxKOZS4uGsBKw/West-Point-Hotel?node-id=3001-20218&t=GN6VlNZdbgBVB8M5-4"
              />
            </div>

            <div className={styles.prototypeBanner} id="wordpress">
              <div className={styles.details}>
                <h2>WordPress Website</h2>
                <p>The West Point Hotel website was developed using WordPress, ensuring a balance between aesthetics, functionality, and performance.</p>
                <p>To achieve this, a combination of WordPress plugins was utilized for enhanced functionality and performance. Additionally, the styles were customized using custom CSS to faithfully translate the original Figma design, ensuring a cohesive and polished final product.</p>
              </div>
              <div className={styles.prototypes}>
                    <div className={styles.prototypeContainer}>
                      <div className={styles.wireframeImages}>
                    <img
                      src="/westPointHotel/wordpress.png"
                      alt="West Point Hotel WordPress Website"
                      width="600"
                      className={styles.wireframeImage}
                    />
                  </div>  
                  <div className={styles.nextButton}>
                    <a target="_blank" href="https://west-point-hotel.vercel.app/">
                      <button className={styles.button}>View Website</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.prototypeBanner} id="prototype">
              <div className={styles.prototypeTitle}>
                <h2>Prototype</h2>
              </div> 
              <div className={styles.prototypes}>
                <div className={styles.prototypeContainer}>
                  <iframe 
                    className={styles.prototype} 
                    src="https://embed.figma.com/proto/EOZx56ArPGxKOZS4uGsBKw/West-Point-Hotel?node-id=1263-5979&scaling=scale-down-width&content-scaling=fixed&page-id=1263%3A4573&starting-point-node-id=1263%3A5979&embed-host=share" 
                    allowFullScreen
                  />
                  <div className={styles.nextButton}>
                    <a target="_blank" href="https://www.figma.com/proto/EOZx56ArPGxKOZS4uGsBKw/West-Point-Hotel?node-id=1263-5979&t=mvRqjShpbuNtjqAH-1&scaling=scale-down-width&content-scaling=fixed&page-id=1263%3A4573&starting-point-node-id=1263%3A5979">
                      <button className={styles.button}>View Prototype</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className={styles.problemSolution} id="problem-solution">
              <div className={styles.problem}>
                <h2>Problem</h2>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Low Adherence Rate:</li>
                      <li className={styles.indent}></li>
                    </div>
                    <div>
                      <li className={styles.bold}>Misunderstanding Instructions:</li>
                      <li className={styles.indent}></li>
                    </div>
                    <div>
                      <li className={styles.bold}>Forgetfulness:</li>
                      <li className={styles.indent}></li>
                    </div>
                  </ul>
              </div>
              <div className={styles.solution}>
                <h2>Solution</h2>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Simplify Medication Regimens:</li>
                      <li className={styles.indent}></li>
                    </div>
                    <div>
                      <li className={styles.bold}>Explain Key Information:</li>
                      <li className={styles.indent}></li>
                    </div>
                    <div>
                      <li className={styles.bold}>Smart Reminders:</li>
                      <li className={styles.indent}></li>
                    </div>
                  </ul>
              </div>
            </div> */}

            <div className={styles.appFeatures} id="features">
              <div className={styles.featureTitle}>
                <h2>Features</h2>
              </div> 
              <AppFeature1
                feature1="Easy Accommodation Booking"
                image1="/westPointHotel/feature1.png"
                alt1="Easy Accommodation Booking"
                descriptions1={[
                  "A user-friendly booking system that simplifies room selection and reservation"
                ]}
              />
              <AppFeature2
                feature2="Personalized Experience package and Itinerary"
                image2="/westPointHotel/feature2.png"
                alt2="Personalized Experience package and Itinerary"
                descriptions2={[
                  "Guests can customize their stay with tailored activity recommendations based on their preferences",
                ]}
              />
              <AppFeature1
                feature1="Clear Getting Here Guideline and Pick-up Services"
                image1="/westPointHotel/feature3.png"
                alt1="Clear Getting Here Guideline and Pick-up Services"
                descriptions1={[
                  "Comprehensive transportation guidance, covering airports, cruise terminals, helipads, and parking facilities", 
                  "Convenient pick-up services available for a seamless arrival experience"
                ]}
              />
              <AppFeature2
                feature2="Easy Navigation to Dining Options"
                image2="/westPointHotel/feature4.png"
                alt2="Easy Navigation to Dining Options"
                descriptions2={[
                  "Intuitive browsing for the hotel's fine dining restaurant and casual eatery, each with its own branding and menu"
                ]}
              />
            </div>

            <div className={styles.client} id="client-requirements">
              <div className={styles.details}>
                <h2>Client Requirements</h2>
                <p>Following the discussion with the client (role-played by the course instructor), the following key requirements were gathered:</p>
                <table className={styles.table}>
                  <tr>
                    <th>Branding</th>
                    <td>
                      <ul>
                        <li>Modern, high-end, romantic, business-friendly</li>
                        <li>4.5-star luxury experience</li>
                        <li>Clean, rectilinear design with a neutral palette</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Colors</th>
                    <td>
                      <ul>
                        <li>No green hues or black content backgrounds</li>
                        <li>Clean line</li>
                        <li>Rectilinear</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Goals</th>
                    <td>
                      <ul>
                        <li>Attract more business clients outside tourist seasons</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Target Audience</th>
                    <td>
                      <ul>
                        <li>Target romantic getaways and international tourists</li>
                        <li>Not family-oriented</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Requirements content</th>
                    <td>
                      <ul>
                        <li>Provide detailed room pages with high-quality images and descriptions</li>
                        <li>Increase bookings from business clients during non-tourist seasons</li>
                        <li>Distinct branding for the fine dining restaurant and 'Earls' bar/café</li>
                      </ul>
                    </td>
                  </tr>
                  
                </table>
              </div>
            </div>

            <div className={styles.userResearch} id="user-research">
                <UserResearch
                  title="User Research"
                  descriptions={[
                    "Personalization: Guests highly value personalized services and recommendations, such as customized room suggestions",
                    "Images and video integration: High-resolution images and video tours significantly improve user engagement and decision-making.",
                    "Clear and Detailed Information: Transparency in room amenities, rates (including fees and taxes), and refund policies is critical."
                  ]}
                />
                <div className={styles.nextButton}>
                  <a className={styles.button} href="https://docs.google.com/document/d/14qbXtwUQwcrIbqWldgZOqBIapS5F_11lDD5whs0tshs/edit?tab=t.0" target="_blank">
                    <button  className={styles.button}>View Findings</button>
                  </a>
                </div>
            </div>

            <div className={styles.competitiveAnalysis} id="competitive-analysis">
                <ContentSection
                  title="Competitive Analysis"
                  image="/westPointHotel/competitive-analysis.png"
                  alt="West Point Hotel Competitive Analysis"
                  overview="Analyzing the competition was a crucial step in understanding what is already available and identifying opportunities for improvement. By reviewing existing medication management apps, the team identified both their strengths and the gaps that needed to be addressed. This insight shaped Remedify into a smarter, more user-focused solution."
                />
                <div className={styles.details}>
                  <p>How West Point Hotel's Website Design Stands Out:</p>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Enhanced Personalization & Itinerary Planning:</li>
                      <li className={styles.indent}>Provide a tailored booking experience with room and package suggestions based on past visits or stated interests.</li>
                      <li className={styles.indent}>Implement personalized recommendation of activities and dining options based on user preferences.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Better User Experience:</li>
                      <li className={styles.indent}>Maintain a clean, minimalist design with intuitive navigation to prevent user frustration.</li>
                      <li className={styles.indent}>Use high-quality images and videos optimized for all screen sizes to enhance engagement.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Consistent Visual Identity:</li>
                      <li className={styles.indent}>Consistent colors, buttons, icons, and page layouts across all sections, reinforcing the brand’s luxury and elegance.</li>
                      <li className={styles.indent}>Create a distinct identity for the hotel while maintaining a seamless experience across sub-brands (fine dining restaurant and café).</li>
                    </div>
                  </ul>
                  <div className={styles.linkButton}>
                    <a className={styles.button} href="https://docs.google.com/spreadsheets/d/13AmBefV4aErM1PzPs5EHiCHJuTincPbEuIQJ90rS7g0/edit?usp=sharing" target="_blank">
                      <button  className={styles.button}>View Competitive Analysis</button>
                    </a>
                  </div>
                </div>

            </div>

            
            {/* <div className={styles.detailsContainer} id="target-audience">
              <div className={styles.details}>
                <h2>Target Audience</h2>
                <ul>
                  <li className={styles.bold}>Polypharmacy</li>
                  <li className={styles.indent}>For those managing multiple medications, Remedify simplifies complex schedules with clear reminders, ensuring users stay on track and in control of their health.</li>
                  <li className={styles.bold}>Accessible</li>
                  <li className={styles.indent}>Remedify’s intuitive reminders help users with cognitive challenges remember their medications, supporting confidence and routine.</li>
                </ul>
              </div>
            </div> */}

            <div className={styles.detailsContainer} id="user-persona">
              <ContentSection
                  title="User Persona"
                  image="/westPointHotel/user-persona.png"
                  alt="West Point Hotel's User Persona"
                  overview="User personas are developed to better understand and address the needs of the target audience. They guide thoughtful design decisions, ensuring the website remains practical, user-friendly, and relevant."
                />
                <div>
                  <div className={styles.details}>
                    <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Primary Persona: Engaged Bridegroom</li>
                      <li className={styles.indent}>Our primary user is an engaged bridegroom who is planning their honeymoon. This persona values.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Secondary Persona: Business Traveller </li>
                      <li className={styles.indent}>Our secondary user is a business traveller who is organizing a business retreat. This persona values.</li>
                    </div>
                  </ul>
                    <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.figma.com/design/kciiYHXW1VgGOXt1Y7CkiM/West-Point-Hotel-User-Persona?node-id=0-1&t=BLXW4EUebNBcalOE-1" target="_blank">
                      <button className={styles.button}>View User Persona</button>
                    </a>
                  </div>
                  </div>
                </div>
            </div>

            <div className={styles.detailsContainer} id="style-guide">
                <ContentSection
                  title="Style Guide"
                  image="/westPointHotel/styleguide.png"
                  alt="West Point Hotel's Style Guide"
                  overview="The West Point Hotel style guide is designed to reflect the hotel's elegance and luxury. Its aesthetic draws inspiration from the sun-kissed sandy shores, the shimmering turquoise waters, and the warm white slabs of the hotel's modern architecture."
                />
                <div>
                  <div className={styles.details}>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Logo:</li>
                        <li className={styles.subIndent}>West Point Hotel’s logo embodies elegance, with geometric cuts resembling diamonds with an angelic aura.</li>
                        <li className={styles.subIndent}>Initially inspired by a ‘W’ shape from “West Point”, it captures sophistication and celestial charm, making it a distinctive symbol for our luxury hotel.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Colors:</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Beige:</span> Represents the warmth of Caribbean sands, offering a sense of comfort and luxury.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Cobalt/Turquoise:</span> Represent the tranquil beauty of Caribbean waters, symbolizing serenity and luxury.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>White:</span> Emphasizes modernity and simplicity, enhancing the hotel's sleek architecture and luxurious ambiance.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Typography:</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Cormorant garamond:</span> Used for the headings, is a classic serif that exudes elegance and sophistication.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Open Sans:</span> Applied across the website for body text, ensuring a clean, modern, and highly readable experience.</li>
                      </div>
                    </ul>
                    <div className={styles.linkButton}>
                      <a className={styles.button} href="https://www.figma.com/design/EOZx56ArPGxKOZS4uGsBKw/West-Point-Hotel?node-id=3001-20218&t=K4zsARPwUZ6ZQulP-4" target="_blank">
                        <button  className={styles.button}>View Style Guide</button>
                      </a>
                    </div>
                  </div>
                </div>
            </div>

            <div className={styles.detailsContainer} id="site-map">
                <ContentSection
                  title="Site Map"
                  image="/westPointHotel/site-map.png"
                  alt="West Point Hotel Site Map"
                  overview="Based on user surveys, secondary research, and competitive analysis, we developed a site map for West Point Hotel. Our site map serves as a blueprint for the app’s structure, helping us organize features and ensure users can easily navigate."
                />
                <div>
                  <div className={styles.details}>
                    <p>Major sections::</p>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Home:</li>
                        <li className={styles.indent}>Showcases hotel services, ambiance, and featured experiences with high-quality visuals.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Accommodation:</li>
                        <li className={styles.indent}>Allows guests to browse rooms, view amenities, compare options, and book easily.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Experiences & Itinerary Planner:</li>
                        <li className={styles.indent}>Displays available activities, experience packages, and a customizable itinerary builder.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Weddings & Business Retreats:</li>
                        <li className={styles.indent}>Introduces event offerings, showcases past events, and provides consultation booking.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Dining:</li>
                        <li className={styles.indent}>Highlights the hotel’s fine dining restaurant and café with menu previews and links to their subsites.</li>
                      </div>
                    </ul>
                    <div className={styles.linkButton}>
                      <a className={styles.button} href="https://www.figma.com/design/Q6q19rWIbegjKwoAtecAD2/West-Point-Hotel-Site-Map?node-id=0-1&t=uJC44dtxcCNWJx1N-1" target="_blank">
                        <button  className={styles.button}>View Site Map</button>
                      </a>
                    </div>
                  </div>
                </div>
                

            </div>

            <div className={styles.userFlowChart} id="user-story-map">
                <ContentSection
                  title="User Story Map"
                  image="/westPointHotel/user-story-map.png"
                  alt="West Point Hotel User Story Chart"
                  overview="The user story map outlines how users will interact with Remedify, ensuring a smooth and intuitive experience from start to finish."
                />
                <div className={styles.details}>
                  {/* <p>Key User Journeys:</p> */}
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>User Types:</li>
                      <li className={styles.indent}>Couples,  Business Travelers, General guests</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Core User Activities:</li>
                      <li className={styles.indent}>Book accommodation, Manage reservation, Explore experience, explore ways to get to the hotel, book wedding or business retreat, explore dining experiences, contact support, VIP sign up</li>
                    </div>
                    
                  </ul>
                  <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.figma.com/design/qFjWPiD5Q6kgdJ6m7CcxVv/West-Point-Hotel-User-Story?node-id=0-1&t=CrDunG94NPT3CElN-1" target="_blank">
                      <button className={styles.button}>View User Story Map</button>
                    </a>
                  </div>
                </div>
            </div>



            <div className={styles.detailsContainer} id="wireframing">
              <div className={styles.details}>
                <h2>Wireframing</h2>
                <p>Guided by the site map and user story map, the wireframe was developed to visualize the website's layout and user interactions. Drawing on insights from the competitive analysis, the focus was placed on crafting a user-friendly experience tailored to the needs of the target audience. The wireframe showcases how users will engage with each feature, ensuring intuitive navigation and ease of use.</p>
              </div>
              <div className={styles.wireframeImages}>
                <img
                  src="/westPointHotel/wireframe.png"
                  alt="West Point Hotel Wireframe"
                  width="600"
                  className={styles.wireframeImage}
                />
              </div>  
              <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.figma.com/design/EOZx56ArPGxKOZS4uGsBKw/West-Point-Hotel?node-id=5054-12840&t=K4zsARPwUZ6ZQulP-4" target="_blank">
                      <button className={styles.button}>View Wireframe</button>
                    </a>
                  </div>
            </div>

            <div className={styles.detailsContainer} id="usability-testing">
              <div className={styles.details}>
                <h2>Usability Testing</h2>
                <p>Usability testing was conducted with 5 participants, which involved observing users as they interacted with West Point Hotel’s website. Insights are then drawn to improve the interface and functionality of the website.</p>
              </div>
              <div className={styles.usabilityTesting}>
                <div className={styles.testing}>
                  <h3 className={styles.testingTitle}>Navigation Issues</h3>
                  <div className={styles.testingImageContainer}>
                    <div>
                      <img
                        src="/westPointHotel/before1.png"
                        alt="Favoriting System Before Usability Testing"
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                    <div>
                      <img
                        src="/westPointHotel/after1.png"
                        alt="Favoriting System After Usability Testing"
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                  </div>
                  <div className={styles.testingTextContainer}>
                    {/* <h3 className={styles.testingTitle}>Upcoming medication logging </h3> */}
                    <div className={styles.testingDetailsContainer}>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>Before:</p>
                            <li>Users reported difficulty returning to previous pages.</li>
                          </div>
                        </ul>
                      </div>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>After:</p>
                            <li>Added breadcrumbs for easier navigation.</li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.testing}>
                  <h3 className={styles.testingTitle}>Call-to-Action for Booking on Homepage</h3>
                  <div className={styles.testingImageContainer}>
                    <div>
                      <img
                        src="/westPointHotel/before2.png"
                        alt="Meditation Categories Before Usability Testing"
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                    <div>
                      <img
                        src="/westPointHotel/after2.png"
                        alt="Meditation Categories After Usability Testing"
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                  </div>
                  <div className={styles.testingTextContainer}>
                    {/* <h3 className={styles.testingTitle}>Medication Library</h3> */}
                    <div className={styles.testingDetailsContainer}>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>Before:</p>
                            <li>Users struggled to find booking options.</li>
                          </div>
                        </ul>
                      </div>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>After:</p>
                            <li>Implemented a prominent "Book Now" CTA on the homepage.</li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.testing}>
                  <h3 className={styles.testingTitle}>Itinerary Page</h3>
                  <div className={styles.testingImageContainer}>
                    <div>
                      <img
                        src="/westPointHotel/before3.png"
                        alt="Weather Section Before Usability Testing"
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                    <div>
                      <img
                        src="/westPointHotel/after3.png"
                        alt="Weather Section After Usability Testing"
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                  </div>
                  <div className={styles.lastTestingTextContainer}>
                    <div className={styles.testingDetailsContainer}>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>Before:</p>
                            <li>Users found it challenging to create itineraries.</li>
                          </div>
                        </ul>
                      </div>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>After:</p>
                            <li>Create packages that include multiple activities and display these packages in itinerary view.</li>
                            <li>Allow users to select an itinerary and edit it by removing or adding experiences as desired.</li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
              
            </div>

            {/* <div className={styles.initialHiFi} id="usability-testing">
              <ContentSection
                title="Usability Testing"
                image="/westPointHotel/usability-testing.png"
                alt="West Point Hotel Usability Testing"
                overview="Usability testing was conducted with 5 participants, which involved observing users as they interacted with West Point Hotel’s website. Insights are then drawn to improve the interface and functionality of the website."
              />
              <div className={styles.details}>
                <p>Areas of improvement: </p>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Navigation Issues</li>
                    <li className={styles.indent}>Users reported difficulty returning to previous pages.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Lack of Call-to-Action for Booking on Homepage</li>
                    <li className={styles.indent}>Users struggled to find booking options.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Confusing Itinerary Page</li>
                    <li className={styles.indent}>Users found it challenging to create itineraries.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Unclear Wedding/Business Retreat Booking Process</li>
                    <li className={styles.indent}>Users expected to contact hotel staff instead of booking online, but failed to find contact form on the Wedding/Business Retreat pages.</li>
                  </div>
                </ul>
                
              </div>
              <div className={styles.appFeatures}>
                <div>
                  <h3>Recommendations:</h3>
              </div>
              <AppFeature1
                feature1="Navigation Issues"
                image1="/westPointHotel/recommendation1.png"
                alt1="Navigation Issues"
                descriptions1={[
                  "Added breadcrumbs for easier navigation."
                ]}
              />
              <AppFeature2
                feature2="Call-to-Action for Booking"
                image2="/westPointHotel/recommendation2.png"
                alt2="Call-to-Action for Booking"
                descriptions2={[
                  'Implemented a prominent "Book Now" CTA on the homepage.'
                ]}
              />
              <AppFeature1
                feature1="Itinerary Page"
                image1="/westPointHotel/recommendation3.png"
                alt1="Itinerary Page"
                descriptions1={[
                  "Create packages that include multiple activities and display these packages in itinerary view.",
                  "Allow users to select an itinerary and edit it by removing or adding experiences as desired."
                ]}
              />
            </div>

            </div> */}

            <div className={styles.initialHiFi} id="final-hifi">
                <ContentSection
                  title="Final Hi-Fi"
                  image="/westPointHotel/final-hifi.png"
                  alt="West Point Hotel Final Hi-Fi"
                  overview="The final iteration of West Point Hotel's website incorporates client and user feedback to provide an intuitive, visually appealing, and highly functional website experience."
                />
                <div className={styles.details}>
                  <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.figma.com/design/EOZx56ArPGxKOZS4uGsBKw/West-Point-Hotel?node-id=3001-14313&t=K4zsARPwUZ6ZQulP-4" target="_blank">
                      <button  className={styles.button}>View Final Hi-Fi</button>
                    </a>
                  </div>
                </div>
            </div>

            <div className={styles.detailsContainer} id="reflection">
                <div>
                  <div className={styles.details}>
                    <h2>Reflection and Learnings</h2>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Client Collaboration:</li>
                        <li className={styles.subIndent}>Designing for an established brand requires aligning with business goals and client feedback.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>WordPress Development:</li>
                        <li className={styles.subIndent}>Gained hands-on experience in leveraging WordPress for an optimized web experience.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Iterative Design:</li>
                        <li className={styles.subIndent}>Constant user testing and refinements lead to a appealing and intuitive final product.</li>
                      </div>
                    </ul>
                  </div>
                </div>
            </div>

            <div className={styles.nextProject}>
              <h2>Next Project is...</h2>
                <NextCard 
                name="Navie"
                image="/navie-homepage.png"
                alt="Navie"
                link="/navie"
                button="Next Project"
              />
            </div>
          </div>
        </div>
        </div>
      </main>
      <ScrollButton/>
      <Footer />
    </div>
  );
}
