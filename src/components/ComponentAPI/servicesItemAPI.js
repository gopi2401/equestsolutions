import webDevelopment from "../images/vector-web-development.png";
import cloudservice from "../images/vector-cloud-sass.svg";
import appdevelopment from "../images/vector-app-development.svg";
import sassdevelopment from "../images/vector-sass.svg";
import qualityAssurance from "../images/vector-qa.svg";
import dataMigration from "../images/vector-data-analysis.svg";
import offshoreDevelopment from "../images/vector-offshore-development.svg";
import shopifyDevelopment from "../images/vector-shopify.svg";
import uiuxDevelopment from "../images/vector-ui-ux.svg";
import ecomDevelopment from "../images/vector-ecom.svg";
import seoService from "../images/vector-seo.svg";
import softwareMigration from "../images/vector-software-migration.svg";

import php from "../images/php.svg";
import wp from "../images/wp.svg";
import magento from "../images/magento.svg";
import drupal from "../images/drupal.svg";
import shopify from "../images/shopify.svg";
import shopifyplus from "../images/icon-shopify-plus.svg";
import woo from "../images/icon-woo.svg";
import ruby from "../images/icon-ruby-on-rails.svg";
import gql from "../images/icon-graphql.svg";
import liquid from "../images/icon-liquid.png";
import html from "../images/html.svg";
import css from "../images/css.svg";
import javascript from "../images/javascript.svg";
import sql from "../images/mysql.svg";
import bigCommerce from "../images/icon-bigcommerce.svg";
import mongodb from "../images/mongodb.svg";
import python from "../images/icon-python.svg";
import typescript from "../images/typescript.svg";
import reactnative from "../images/react-native.svg";
import swift from "../images/swift.svg";
import kotlin from "../images/kotlin.svg";
import ps from "../images/icon-adobe-photoshop.svg";
import xd from "../images/icon-xd.svg";
import ai from "../images/icon-ai.svg";
import figma from "../images/icon-figma.svg";
import zeplin from "../images/icon-zeplin.svg";
import invision from "../images/icon-invision.svg";
import jenkins from "../images/jenkins.svg";
import aws from "../images/aws.svg";
import digitalocean from "../images/digitalocean.svg";
import linode from "../images/linode.svg";
import kubernetes from "../images/kubernetes.svg";

import selenium from "../images/selenium.svg";
import istqb from "../images/istqb.png";
import iiba from "../images/iiba.svg";

import webflow from "../images/webflow.svg";
import gempages from "../images/gempages.svg";
import datocms from "../images/datocms.svg";
import zapier from "../images/zapier.svg";

import facebook from "../images/meta.svg";
import twitter from "../images/twitter.svg";
import google from "../images/google.svg";
import tripleWhale from "../images/triple-whale.png";
import tiktok from "../images/tiktok.svg";
import sqlAnalysis from "../images/sql.svg";

import tableua from "../images/tableau.png";
import apacheHadoop from "../images/apache-hadoop.png";
import apacheSpark from "../images/apache-spark.png";

const serviceItemCardData = [
  {
    id: 8,
    img: offshoreDevelopment,
    linkUrl: "/services/offshore-development-center",
    title: "Offshore Development",
    description:
      "<p>Our offshore development services offer a strategic advantage for businesses seeking cost-effective, scalable, and agile solutions. With a global talent pool and a customer-centric approach, we deliver high-quality software development, seamless integration, and timely project delivery. Partner with us to optimize resources and drive business success.</p>",
    techImages: [
      {
        id: 1,
        image: php,
      },
      {
        id: 2,
        image: wp,
      },
      {
        id: 3,
        image: magento,
      },
      {
        id: 4,
        image: drupal,
      },
      {
        id: 5,
        image: shopify,
      },
    ],
  },

  {
    id: 4,
    img: webDevelopment,
    linkUrl: "/services/web-development-services",
    title: "Web Development",
    description:
      "<p>Use our expert services to design websites that are exceptional. We are experts at building captivating, mobile-friendly websites that engage users and promote business expansion. Our team of specialists will make sure your online presence stands out from the competitors, from front-end design to back-end functionality. Utilize the power of innovative technology and specialized solutions to boost your brand and provide a remarkable customer experience. Put your faith in us to realize your ideas and advance your company online. Let's start a path toward web development together!</p>",
    techImages: [
      {
        id: 1,
        image: php,
        title: "PHP",
      },
      {
        id: 2,
        image: html,
        title: "HTML",
      },
      {
        id: 3,
        image: css,
        title: "CSS",
      },
      {
        id: 4,
        image: javascript,
        title: "Javascript",
      },
      {
        id: 5,
        image: reactnative,
        title: "React Native",
      },
      {
        id: 6,
        image: shopify,
        title: "Shopify",
      },
      {
        id: 7,
        image: wp,
        title: "Wordpress",
      },
      {
        id: 8,
        image: magento,
        title: "Magento",
      },
      {
        id: 9,
        image: drupal,
        title: "Drupal",
      },
    ],
  },

  {
    id: 3,
    img: appdevelopment,
    linkUrl: "/services/custom-application-development",
    title: "Custom Application Development",
    description:
      "<p>At eQuest Solutions, we are experts in creating bespoke mobile applications for both iOS and Android platforms. Our talented developers are dedicated to building innovative, intuitive, and user-friendly apps designed to engage your audience and drive business growth. We offer comprehensive end-to-end solutions, guiding you from initial concept through development, testing, and launch. Reach out to us today to discover how our mobile app development services can help you achieve your objectives.</p>",
    techImages: [
      {
        id: 1,
        image: php,
        title: "PHP",
      },
      {
        id: 2,
        image: javascript,
        title: "Javascript",
      },
      {
        id: 3,
        image: python,
        title: "Python",
      },
      {
        id: 4,
        image: typescript,
        title: "Typescript",
      },
      {
        id: 5,
        image: reactnative,
        title: "React Native",
      },
      {
        id: 6,
        image: swift,
        title: "Swift",
      },
      {
        id: 7,
        image: kotlin,
        title: "Kotlin",
      },
    ],
  },

  {
    id: 2,
    img: ecomDevelopment,
    linkUrl: "/services/ecommerce-development",
    title: "eCommerce Development",
    description:
      "<p>At eQuest Solutions, our expertise lies in delivering outstanding eCommerce development services designed to create robust and scalable online stores. Our dedicated team specializes in crafting bespoke solutions tailored to meet the unique demands of your business. We emphasize building intuitive user interfaces, integrating secure payment gateways, and providing versatile shipping options to ensure a seamless shopping experience. We offer a complete suite of eCommerce development services, covering every stage from initial brainstorming and design to final implementation and launch. Our mission is to help you set up an online store that operates smoothly and effectively, driving growth and success for your business.</p> <p>We offer a complete suite of eCommerce development services, covering every stage from initial brainstorming and design to final implementation and launch. Our mission is to help you set up an online store that operates smoothly and effectively, driving growth and success for your business.</p> <p>Whether you're launching a new venture or seeking to improve an existing online presence, we have the skills and experience to help you reach your goals. Contact us today to discover how our eCommerce development services can support your business's journey to success.</p>",
    techImages: [
      {
        id: 1,
        image: php,
        title: "PHP",
      },
      {
        id: 2,
        image: html,
        title: "HTML",
      },
      {
        id: 3,
        image: css,
        title: "CSS",
      },
      {
        id: 4,
        image: javascript,
        title: "Javascript",
      },
      {
        id: 7,
        image: ruby,
        title: "Ruby on Rails",
      },
      {
        id: 8,
        image: shopify,
        title: "Shopify",
      },
      {
        id: 9,
        image: bigCommerce,
        title: "BigCommerce",
      },
      {
        id: 10,
        image: woo,
        title: "Woocommerce",
      },
      {
        id: 5,
        image: sql,
        title: "MySQL",
      },
      {
        id: 6,
        image: mongodb,
        title: "MongoDB",
      },
    ],
  },

  {
    id: 1,
    img: shopifyDevelopment,
    linkUrl: "/services/shopify-enterprise-services",
    title: "Shopify Enterprise Services",
    description:
      "<p>Our Shopify Enterprise Services offer a powerful and scalable e-commerce solution for businesses looking to grow and expand their online presence. With features like multi-channel selling, custom app development, and enterprise-grade security, our services can help you take your business to the next level. Contact us to learn more.</p>",
    techImages: [
      {
        id: 1,
        image: shopifyplus,
        title: "Shopify Plus",
      },
      {
        id: 2,
        image: shopify,
        title: "Shopify",
      },
      {
        id: 3,
        image: liquid,
        title: "Shopify Liquid",
      },
      {
        id: 3,
        image: gql,
        title: "GraphQL",
      },
      {
        id: 4,
        image: ruby,
        title: "Ruby on Rails",
      },
      {
        id: 5,
        image: html,
        title: "HTML",
      },
      {
        id: 6,
        image: css,
        title: "CSS",
      },
    ],
  },

  {
    id: 5,
    img: uiuxDevelopment,
    linkUrl: "/services/ui-ux-development",
    title: "UI/UX Development",
    description:
      "<p>At eQuest solutions, we offer comprehensive UI/UX services that transform digital experiences. Our expert team of designers and usability specialists collaborate closely with clients to create intuitive, visually stunning interfaces. We begin by conducting thorough user research to understand your target audience and their needs. From wireframing and prototyping to seamless interaction design, we prioritize user-centricity at every step. By incorporating the latest design trends and best practices, we ensure your product stands out in today's competitive market. Trust us to enhance your digital presence with compelling UI/UX solutions.</p>",
    techImages: [
      {
        id: 1,
        image: ps,
        title: "Adobe Photoshop",
      },
      {
        id: 2,
        image: xd,
        title: "Adobe XD",
      },
      {
        id: 3,
        image: ai,
        title: "Adobe Illustrator",
      },
      {
        id: 4,
        image: figma,
        title: "Figma",
      },
      {
        id: 5,
        image: invision,
        title: "InVision",
      },
      {
        id: 6,
        image: zeplin,
        title: "Zeplin",
      },
    ],
  },

  {
    id: 6,
    img: softwareMigration,
    linkUrl: "/services/software-migration",
    title: "Software Migration Center",
    description:
      "<p>Effortlessly migrate your software systems with our expert services. We specialize in seamless transitions to modern platforms, including cloud migration and technology upgrades. Trust us for meticulous planning, minimal disruption, and enhanced performance, as we future-proof your systems and drive your business forward with reliable software migration solutions.</p>",
    techImages: [
      {
        id: 1,
        image: aws,
        title: "aws",
      },
      {
        id: 2,
        image: digitalocean,
        title: "Digital Ocean",
      },
      {
        id: 3,
        image: linode,
        title: "Linode",
      },
      {
        id: 4,
        image: kubernetes,
        title: "Kubernetes",
      },
      {
        id: 5,
        image: jenkins,
        title: "Jenkins",
      },
    ],
  },

  {
    id: 7,
    img: qualityAssurance,
    linkUrl: "/services/qa-services",
    title: "Quality Analysis Services",
    description:
      "<p>Experience excellence in software quality with our comprehensive Quality Assurance (QA) services. We employ cutting-edge testing techniques, automation tools, and industry best practices to identify bugs, optimize performance, and ensure a seamless user experience. Partner with us for superior QA solutions that drive your digital success.</p>",
    techImages: [
      {
        id: 1,
        image: selenium,
        title: "Selenium",
      },
      {
        id: 2,
        image: iiba,
        title: "International Business Analysts Association",
      },
      {
        id: 3,
        image: istqb,
        title: "International Software Testing Qualifications Board",
      },
    ],
  },

  {
    id: 9,
    img: cloudservice,
    linkUrl: "/services/cloud-solutions",
    title: "Cloud Solutions",
    description:
      "<p>Utilize our cloud solution services to strengthen your business. We provide complete cloud migration, management, and strategy solutions that are suited to your company's requirements. Our cloud expertise provide smooth integration and safe operations, enabling you to uncover new opportunities and accelerate growth. This includes streamlining infrastructure and enabling data-driven insights.",
    techImages: [
      {
        id: 1,
        image: aws,
        title: "aws",
      },
      {
        id: 2,
        image: digitalocean,
        title: "Digital Ocean",
      },
      {
        id: 3,
        image: linode,
        title: "Linode",
      },
      {
        id: 4,
        image: kubernetes,
        title: "Kubernetes",
      },
      {
        id: 5,
        image: jenkins,
        title: "Jenkins",
      },
    ],
  },

  {
    id: 10,
    img: sassdevelopment,
    linkUrl: "/services/saas-solutions",
    title: "SaaS Solutions",
    description:
      "<p>With our SaaS solutions, you can strengthen your company. We provide a wide selection of adaptable software-as-a-service solutions that help organizations to automate processes, boost output, and spur innovation. Our SaaS solutions are created to help your organization advance with secure cloud-based solutions, adaptable scaling, and cost-effective pricing structures.</p>",
    techImages: [
      {
        id: 1,
        image: shopify,
        title: "Shopify",
      },
      {
        id: 2,
        image: bigCommerce,
        title: "BigCommerce",
      },
      {
        id: 3,
        image: webflow,
        title: "Webflow",
      },
      {
        id: 4,
        image: gempages,
        title: "GemPages",
      },
      {
        id: 5,
        image: datocms,
        title: "DatoCMS",
      },
      {
        id: 6,
        image: zapier,
        title: "Zapier",
      },
    ],
  },

  {
    id: 11,
    img: seoService,
    linkUrl: "/services/seo",
    title: "SEO Services",
    description:
      "<p>Enhance your digital footprint with our SEO services. We employ a holistic approach, focusing on keyword research, on-page optimization, link building, and content marketing to improve your website's visibility and search engine rankings. Let our SEO specialists propel your business forward and unlock its full online potential.</p>",
    techImages: [
      {
        id: 1,
        image: google,
        title: "Google",
      },
      {
        id: 2,
        image: facebook,
        title: "Meta",
      },
      {
        id: 3,
        image: tripleWhale,
        title: "Triple Whale",
      },
      {
        id: 4,
        image: twitter,
        title: "Twitter",
      },
      {
        id: 5,
        image: tiktok,
        title: "Tiktok",
      },
    ],
  },

  {
    id: 12,
    img: dataMigration,
    linkUrl: "/services/data-analysis",
    title: "Data Analysis",
    description:
      "<p>Maximize the potential of your data with our comprehensive data analytics services. Our skilled team employs advanced tools and methodologies to extract meaningful insights, identify hidden trends, and enable informed decision-making based on data. Whether it's descriptive or predictive analytics, we empower businesses to leverage their data, gain a competitive edge, and foster sustainable growth.</p>",
    techImages: [
      {
        id: 1,
        image: python,
        title: "Python",
      },
      {
        id: 2,
        image: sqlAnalysis,
        title: "SQL",
      },
      {
        id: 3,
        image: tableua,
        title: "Tableau",
      },
      {
        id: 4,
        image: apacheHadoop,
        title: "Apache Hadoop",
      },
      {
        id: 5,
        image: apacheSpark,
        title: "Apache Spark",
      },
    ],
  },
];

export default serviceItemCardData;
