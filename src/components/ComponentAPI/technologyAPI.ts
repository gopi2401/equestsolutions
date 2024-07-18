/* Frontend */
import html from "../../assets/media/html.svg";
import css from "../../assets/media/css.svg";
import tailwind from "../../assets/media/tailwind.svg";
import vue from "../../assets/media/vue.svg";
import sass from "../../assets/media/sass.svg";
import react from "../../assets/media/react.svg";
import angular from "../../assets/media/angular.svg";
import typescript from "../../assets/media/typescript.svg";
import javscript from "../../assets/media/javascript.svg";
import remix from "../../assets/media/icon-remix.svg";

/*  Backend */
import php from "../../assets/media/php.svg";
import nodejs from "../../assets/media/nodejs.svg";
import python from "../../assets/media/python.svg";
import gatsby from "../../assets/media/gatsby.svg";
import expressjs from "../../assets/media/expressjs.svg";
import nextjs from "../../assets/media/nextjs-1.svg";
import nuxtjs from "../../assets/media/icon-nuxt.svg";

/*  Mobile */
import ios from "../../assets/media/ios.svg";
import android from "../../assets/media/android.svg";
import swift from "../../assets/media/swift.svg";
import kotlin from "../../assets/media/kotlin.svg";

/*  CMS */
import wp from "../../assets/media/wp.svg";
import magento from "../../assets/media/magento.svg";
import shopify from "../../assets/media/shopify.svg";
import drupal from "../../assets/media/drupal.svg";
import joomla from "../../assets/media/joomla.svg";
import sharepoint from "../../assets/media/sharepoint.svg";
import umbraco from "../../assets/media/umbraco.svg";
import laravel from "../../assets/media/laravel.svg";
import contentful from "../../assets/media/icon-contentful.svg";

/*  Database */
import mysql from "../../assets/media/mysql.svg";
import mongodb from "../../assets/media/mongodb.svg";
import postgresql from "../../assets/media/postgresql.svg";
import redis from "../../assets/media/redis.svg";
import firebase from "../../assets/media/firebase.svg";
import couchbase from "../../assets/media/couchbase.svg";

/*  Devops */
import aws from "../../assets/media/aws.svg";
import digitalocean from "../../assets/media/digitalocean.svg";
import linode from "../../assets/media/linode.svg";
import kubernetes from "../../assets/media/kubernetes.svg";
import jenkins from "../../assets/media/jenkins.svg";
import githubactions from "../../assets/media/githubactions.svg";

import frontendImg from "../../assets/media/frontEndTab.svg";
import backendImg from "../../assets/media/backEndTab.svg";
import mobileAppImg from "../../assets/media/mobileAppTab.svg";
import cmsImg from "../../assets/media/cmsTab.svg";
import databaseImg from "../../assets/media/databaseTab.svg";
import devopsImg from "../../assets/media/dataopsTab.svg";

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
