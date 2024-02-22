import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function Timeline() {
  return (
    <div className='grid grid-cols-3 mx-20'>

        <div className='   w-2/6 '>


            <div className='flex items-center'> 
                <button className=' font-bold text-left rounded-xl mt-14 my-1 py-2 items-center  hover:bg-gray-200 w-full'>
                
                <span className='mx-10 '>
                <HomeOutlinedIcon/>
                <span className='mx-2'>Home</span>
                </span>
                </button>
            </div>

            

            <div className='flex items-center'> 
                <button className='font-bold text-left rounded-xl  my-1 py-2 items-center hover:bg-gray-200 w-full'>
                <span className='mx-10 '>
                <RecommendOutlinedIcon/>
                <span className='mx-2'>Interest</span>
                </span>
                </button>
            </div>

            <div className='flex items-center'> 
                <button className='font-bold text-left rounded-xl  my-1 py-2 items-center hover:bg-gray-200 w-full'>
                <span className='mx-10 '>
                <EmailOutlinedIcon/>
                <span className='mx-2'>Message</span>
                </span></button>
            </div>

            <div className='flex items-center'> 
                <button className='font-bold text-left rounded-xl  my-1 py-2 items-center hover:bg-gray-200 w-full'>
                <span className='mx-10 '>
                <NotificationsNoneOutlinedIcon/>
                <span className='mx-2'>Notification</span>
                </span></button>
            </div>

            <div className='flex items-center'> 
                <button className='font-bold text-left rounded-xl  my-1 py-2 items-center hover:bg-gray-200 w-full'>
                
                <span className='mx-10 '>
                
                <span className='mx-2'>Profile</span>
                </span></button>
            </div>

            
           





            

            
            
            
            
        </div>

        <div className=' bg-yellow-500  w-full h-full'> 
            

            rom Wikipedia, the free encyclopedia

Example of a decision support system for John Day Reservoir
Recommender systems
Concepts
Collective intelligenceRelevanceStar ratingsLong tail
Methods and challenges
Cold startCollaborative filteringDimensionality reductionImplicit data collectionItem-item collaborative filteringMatrix factorizationPreference elicitationSimilarity search
Implementations
Collaborative search engineContent discovery platformDecision support systemMusic Genome ProjectProduct finder
Research
GroupLens ResearchMovieLensNetflix PrizeACM Conference on Recommender Systems
vte
A decision support system (DSS) is an information system that supports business or organizational decision-making activities. DSSs serve the management, operations and planning levels of an organization (usually mid and higher management) and help people make decisions about problems that may be rapidly changing and not easily specified in advance—i.e., unstructured and semi-structured decision problems. Decision support systems can be either fully computerized or human-powered, or a combination of both.

While academics have perceived DSS as a tool to support decision making processes, DSS users see DSS as a tool to facilitate organizational processes.[1] Some authors have extended the definition of DSS to include any system that might support decision making and some DSS include a decision-making software component; Sprague (1980)[2] defines a properly termed DSS as follows:

DSS tends to be aimed at the less well structured, underspecified problem that upper level managers typically face;
DSS attempts to combine the use of models or analytic techniques with traditional data access and retrieval functions;
DSS specifically focuses on features which make them easy to use by non-computer-proficient people in an interactive mode; and
DSS emphasizes flexibility and adaptability to accommodate changes in the environment and the decision making approach of the user.
DSSs include knowledge-based systems. A properly designed DSS is an interactive software-based system intended to help decision makers compile useful information from a combination of raw data, documents, personal knowledge, and/or business models to identify and solve problems and make decisions.

Typical information that a decision support application might gather and present includes:

inventories of information assets (including legacy and relational data sources, cubes, data warehouses, and data marts),
comparative sales figures between one period and the next,
projected revenue figures based on product sales assumptions.
History
The concept of decision support has evolved mainly from the theoretical studies of organizational decision making done at the Carnegie Institute of Technology during the late 1950s and early 1960s, and the implementation work done in the 1960s.[3] DSS became an area of research of its own in the middle of the 1970s, before gaining in intensity during the 1980s.

In the middle and late 1980s, executive information systems (EIS), group decision support systems (GDSS), and organizational decision support systems (ODSS) evolved from the single user and model-oriented DSS. According to Sol (1987),[4] the definition and scope of DSS have been migrating over the years: in the 1970s DSS was described as "a computer-based system to aid decision making"; in the late 1970s the DSS movement started focusing on "interactive computer-based systems which help decision-makers utilize data bases and models to solve ill-structured problems"; in the 1980s DSS should provide systems "using suitable and available technology to improve effectiveness of managerial and professional activities", and towards the end of 1980s DSS faced a new challenge towards the design of intelligent workstations.[4]

In 1987, Texas Instruments completed development of the Gate Assignment Display System (GADS) for United Airlines. This decision support system is credited with significantly reducing travel delays by aiding the management of ground operations at various airports, beginning with O'Hare International Airport in Chicago and Stapleton Airport in Denver, Colorado.[5] Beginning in about 1990, data warehousing and on-line analytical processing (OLAP) began broadening the realm of DSS. As the turn of the millennium approached, new Web-based analytical applications were introduced.

DSS also have a weak connection to the user interface paradigm of hypertext. Both the University of Vermont PROMIS system (for medical decision making) and the Carnegie Mellon ZOG/KMS system (for military and business decision making) were decision support systems which also were major breakthroughs in user interface research. Furthermore, although hypertext researchers have generally been concerned with information overload, certain researchers, notably Douglas Engelbart, have been focused on decision makers in particular.

The advent of more and better reporting technologies has seen DSS start to emerge as a critical component of management design. Examples of this can be seen in the intense amount of discussion of DSS in the education environment.

Applications
DSS can theoretically be built in any knowledge domain. One example is the clinical decision support system for medical diagnosis. There are four stages in the evolution of clinical decision support system (CDSS): the primitive version is standalone and does not support integration; the second generation supports integration with other medical systems; the third is standard-based, and the fourth is service model-based.[6]

DSS is extensively used in business and management. Executive dashboard and other business performance software allow faster decision making, identification of negative trends, and better allocation of business resources. Due to DSS, all the information from any organization is represented in the form of charts, graphs i.e. in a summarized way, which helps the management to take strategic decisions. For example, one of the DSS applications is the management and development of complex anti-terrorism systems.[7] Other examples include a bank loan officer verifying the credit of a loan applicant or an engineering firm that has bids on several projects and wants to know if they can be competitive with their costs.

A growing area of DSS application, concepts, principles, and techniques is in agricultural production, marketing for sustainable development. Agricultural DSSes began to be developed and promoted in the 1990s.[8] For example, the DSSAT4 package,[9] The Decision Support System for Agrotechnology Transfer[10] developed through financial support of USAID during the 1980s[citation needed] and 1990s, has allowed rapid assessment of several agricultural production systems around the world to facilitate decision-making at the farm and policy levels. Precision agriculture seeks to tailor decisions to particular portions of farm fields. There are, however, many constraints to the successful adoption of DSS in agriculture.[11]

DSS is also prevalent in forest management where the long planning horizon and the spatial dimension of planning problems demand specific requirements. All aspects of Forest management, from log transportation, harvest scheduling to sustainability and ecosystem protection have been addressed by modern DSSs. In this context, the consideration of single or multiple management objectives related to the provision of goods and services that are traded or non-traded and often subject to resource constraints and decision problems. The Community of Practice of Forest Management Decision Support Systems provides a large repository on knowledge about the construction and use of forest Decision Support Systems.[12]

A specific example concerns the Canadian National Railway system, which tests its equipment on a regular basis using a decision support system. A problem faced by any railroad is worn-out or defective rails, which can result in hundreds of derailments per year. Under a DSS, the Canadian National Railway system managed to decrease the incidence of derailments at the same time other companies were experiencing an increase.

DSS has been used for risk assessment to interpret monitoring data from large engineering structures such as dams, towers, cathedrals, or masonry buildings. For instance, Mistral is an expert system to monitor dam safety, developed in the 1990s by Ismes (Italy). It gets data from an automatic monitoring system and performs a diagnosis of the state of the dam. Its first copy, installed in 1992 on the Ridracoli Dam (Italy), is still operational 24/7/365.[13] It has been installed on several dams in Italy and abroad (e.g., Itaipu Dam in Brazil),[14] and on monuments under the name of Kaleidos.[15] Mistral is a registered trade mark of CESI. GIS has been successfully used since the '90s in conjunction with DSS, to show on a map real-time risk evaluations based on monitoring data gathered in the area of the Val Pola disaster (Italy).[16]
            
        </div>

        <div className='bg-green-500 w-2/5'>
            Interest
        </div>

    </div>
  )
}

export default Timeline