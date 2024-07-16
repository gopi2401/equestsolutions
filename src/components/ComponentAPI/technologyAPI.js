/* Frontend */
import html from "../images/html.svg";
import css from "../images/css.svg";
import tailwind from "../images/tailwind.svg";
import vue from "../images/vue.svg";
import sass from "../images/sass.svg";
import react from "../images/react.svg";
import angular from "../images/angular.svg";
import typescript from "../images/typescript.svg";
import javscript from "../images/javascript.svg";
import remix from "../images/icon-remix.svg";

/*  Backend */
import php from "../images/php.svg";
import nodejs from "../images/nodejs.svg";
import python from "../images/python.svg";
import gatsby from "../images/gatsby.svg";
import expressjs from "../images/expressjs.svg";
import nextjs from "../images/nextjs-1.svg";
import nuxtjs from "../images/icon-nuxt.svg";

/*  Mobile */
import ios from "../images/ios.svg";
import android from "../images/android.svg";
import swift from "../images/swift.svg";
import kotlin from "../images/kotlin.svg";

/*  CMS */
import wp from "../images/wp.svg";
import magento from "../images/magento.svg";
import shopify from "../images/shopify.svg";
import drupal from "../images/drupal.svg";
import joomla from "../images/joomla.svg";
import sharepoint from "../images/sharepoint.svg";
import umbraco from "../images/umbraco.svg";
import laravel from "../images/laravel.svg";
import contentful from "../images/icon-contentful.svg";

/*  Database */
import mysql from "../images/mysql.svg";
import mongodb from "../images/mongodb.svg";
import postgresql from "../images/postgresql.svg";
import redis from "../images/redis.svg";
import firebase from "../images/firebase.svg";
import couchbase from "../images/couchbase.svg";

/*  Devops */
import aws from "../images/aws.svg";
import digitalocean from "../images/digitalocean.svg";
import linode from "../images/linode.svg";
import kubernetes from "../images/kubernetes.svg";
import jenkins from "../images/jenkins.svg";
import githubactions from "../images/githubactions.svg";

import frontendImg from "../images/frontEndTab.svg";
import backendImg from "../images/backEndTab.svg";
import mobileAppImg from "../images/mobileAppTab.svg";
import cmsImg from "../images/cmsTab.svg";
import databaseImg from "../images/databaseTab.svg";
import devopsImg from "../images/dataopsTab.svg";

const technologyData = [
  {
    id: 1,
    title: "Front End",
    mainImg: frontendImg,
    images: [
      {
        id: 1,
        image: html,
        title: "HTML",
      },
      {
        id: 2,
        image: css,
        title: "CSS",
      },
      {
        id: 3,
        image: tailwind,
        title: "Tailwind",
      },
      {
        id: 4,
        image: sass,
        title: "Sass",
      },
      {
        id: 5,
        image: vue,
        title: "Vue",
      },
      {
        id: 8,
        image: javscript,
        title: "Javascript",
      },
      {
        id: 6,
        image: react,
        title: "React",
      },
      {
        id: 7,
        image: angular,
        title: "Angular",
      },
      {
        id: 8,
        image: typescript,
        title: "Typescript",
      },
      {
        id: 9,
        image: remix,
        title: "Remix",
      },
    ],
  },
  {
    id: 2,
    title: "Backend",
    mainImg: backendImg,
    images: [
      {
        id: 1,
        image: php,
        title: "PHP",
      },
      {
        id: 2,
        image: nodejs,
        title: "Node js",
      },
      {
        id: 3,
        image: python,
        title: "Python",
      },
      {
        id: 4,
        image: gatsby,
        title: "Gatsby",
      },
      {
        id: 5,
        image: expressjs,
        title: "Express js",
      },
      {
        id: 6,
        image: nextjs,
        title: "Next js",
      },
      {
        id: 7,
        image: nuxtjs,
        title: "Nuxt js",
      },
    ],
  },
  {
    id: 3,
    title: "Mobile",
    mainImg: mobileAppImg,
    images: [
      {
        id: 1,
        image: ios,
        title: "iOS",
      },
      {
        id: 2,
        image: android,
        title: "Android",
      },
      {
        id: 3,
        image: react,
        title: "React Native",
      },
      {
        id: 4,
        image: swift,
        title: "Swift",
      },
      {
        id: 5,
        image: kotlin,
        title: "Kotlin",
      },
    ],
  },
  {
    id: 4,
    title: "CMS",
    mainImg: cmsImg,
    images: [
      {
        id: 1,
        image: wp,
        title: "Wordpress",
      },
      {
        id: 2,
        image: magento,
        title: "Magento",
      },
      {
        id: 3,
        image: shopify,
        title: "Shopify",
      },
      {
        id: 4,
        image: drupal,
        title: "Drupal",
      },
      {
        id: 5,
        image: joomla,
        title: "Joomla",
      },
      {
        id: 6,
        image: laravel,
        title: "Laravel",
      },
      {
        id: 7,
        image: sharepoint,
        title: "Sharepoint",
      },
      {
        id: 8,
        image: umbraco,
        title: "Umbraco",
      },
      {
        id: 9,
        image: contentful,
        title: "Contentful",
      },
    ],
  },
  {
    id: 5,
    title: "Database",
    mainImg: databaseImg,
    images: [
      {
        id: 1,
        image: mysql,
        title: "MySQL",
      },
      {
        id: 2,
        image: mongodb,
        title: "Mongo DB",
      },
      {
        id: 3,
        image: postgresql,
        title: "postgreSQL",
      },
      {
        id: 4,
        image: redis,
        title: "Redis",
      },
      {
        id: 5,
        image: firebase,
        title: "Firebase",
      },
      {
        id: 6,
        image: couchbase,
        title: "Couchbase",
      },
    ],
  },
  {
    id: 6,
    title: "DevOps",
    mainImg: devopsImg,
    images: [
      {
        id: 1,
        image: aws,
        title: "AWS",
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
      {
        id: 6,
        image: githubactions,
        title: "Github Actions",
      },
    ],
  },
];

export default technologyData;
