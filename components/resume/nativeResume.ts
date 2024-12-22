import { ResumePrograaming, ResumeSection } from "../../interfaces"
import { RESUME_SUB_TEXT_TYPES } from "../../constants/general"
import { EAA, EDUCATION, PROGRAMMING_SKILLS } from "./genral"

const EXPERIENCE: ResumeSection[] = [{
  head: "Edfora",
  subText: [
    {
      type: RESUME_SUB_TEXT_TYPES.DATE,
      value: 'July\'23 - Present'
    },
    {
      type: RESUME_SUB_TEXT_TYPES.LOCATION,
      value: 'New Delhi'
    }
  ],
  position: "Full Stack Developer - Full Time",
  points: [
    "Optimized cross-platform <strong>React Native apps, boosting user interaction by 30% </strong>through enhanced Android/iOS performance and streamlined features.",
    "Spearheaded the development of multiple critical component, streamlining integration across multiple modules<br> <strong>reducing integration time (75%)</strong> and <strong>enhanced performance (15%)</strong>, boosting team efficiency by <strong>30%</strong>",
    "Implemented centralized state management using <strong>Redux, Redux Toolkit</strong>, or <strong>MobX</strong> for scalable applications",
    "Collaborated with team to <strong>optimize performance (70%)</strong> and <strong>elevate code quality</strong>, implementing efficient practices",
    "Developed a <strong>gesture-controlled UI</strong> in React Native using Animated, enabling interactions similar to LinkedIn reactions.",
    "Integrated <strong>Razorpay</strong> for secure payment processing and <strong>Firebase</strong> for authentication and real-time database integration"
  ]
},
{
  head: "Kuddle",
  subText: [
    {
      type: RESUME_SUB_TEXT_TYPES.DATE,
      value: 'February\'22 - July\'23'
    },
    {
      type: RESUME_SUB_TEXT_TYPES.LOCATION,
      value: 'Hyderabad'
    }
  ],
  position: "Software Development Intern",
  points: [
    "Developed the cross-platform application using <strong>React Native</strong> and <strong>&nbsp; Redux / Redux Toolkit</strong>",
    "<strong>Enhanced website performance by 100%</strong> through strategic implementation of Dynamic Import for efficient resource loading, Next/Image , and Pagination to streamline content navigation.",
    "Built FE & BE for the internal <strong>CRM Portal</strong>, building services like order, product and user management, customer support, sales dashboard, and engagement notification with <strong>RBAC for operations</strong>",
    "Contributed on <strong>Event-based communication system</strong>, user-to-user real-time chat and event based chats with <strong>Socket.io</strong>",
  ],
},
{

  head: "Reasons Technology",
  subText: [
    {
      type: RESUME_SUB_TEXT_TYPES.DATE,
      value: 'August\'22 - September\'22'
    },
    {
      type: RESUME_SUB_TEXT_TYPES.LOCATION,
      value: 'Hyderabad'
    }
  ],
  position: "Software Development Intern",
  points: [
    "Created an <strong>Android app</strong> for business-use with <strong>React Native & Koltin</strong> which is actively used in African Countries",
    "Integrated <strong>Android Native Modules</strong> to build POS features like card reader, bar-code scan, and receipt generation",
    "<strong>Integrated and patched various APIs</strong> like payment, tracking, customer support, etc using AWS and implemented an <strong>Authentication system</strong> integrating Graph API and Google OAuth along with <strong>Express/MongoDB</strong>"
  ]
}
]

const PROJECTS: ResumeSection[] = [
  {
    subText: [
      {
        type: RESUME_SUB_TEXT_TYPES.LINK,
        value: 'https://www.chaitanyak.info/'
      }
    ],
    position: "Personal Portfolio",
    points: [
      "Built a Portfolio website using <strong>Next.js ( Typescript )</strong> and deployed it with AWS ",
      "Used <strong>Elastic Beanstalk</strong> to deploy it while provisioning load balancers, security groups, and VPC.",
      "Constructed <strong>Serverless backend</strong> using AWS Lambda for CRUD operations in <strong>DynamoDB.</strong>"
    ]
  }
]

export const REACT_NATIVE_RESUME_DATA: {
  [key: string]: ResumePrograaming[] | ResumeSection[]
} = {
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  PROGRAMMING_SKILLS,
  'Extra Curricular Activities': EAA
}
