+++
title = 'Skills'
date = 2024-06-14T22:04:51+01:00
+++

I'll be keeping the things on this page limited to stuff I have a reasonable amount of experience with and that are relatively mainstream, rather than just listing all the esoteric weirdness I've had the (mis)fortune to work on.

With the exception of Java (which was covered in my degree course in a very academic way) these are all things I've learned because I suddenly needed to use them in anger on a project - I often find it challenging to pick up a new technology from a tutorial, without a real problem to aim it at.

{{<note>}}
In rough order of time using / competency.
{{</note>}}

## Programming languages :computer::monkey:

- `java`: 10+ years experience with Java at this point ranging from desktop apps producing spreadsheets to webapps to APIs, fair to say I'm comfortable with Java by now. 
- `c#` (or "MS Java"): Only a couple of years hands-on time with this but I found that a lot of my Java experience was transferrable. The last time I used C# it was preferable to Java, but Java has come a long way since then.
- `typescript`: I'm pretty comfortable in Typescript, although my experience was mostly in writing server-side stuff to run GraphQL resolvers.
- `python`: Most of my experience in python has been using it to write scripts in something more friendly than bash. I'd consider myself able to use core python, but I'm not familiar with the fancier elements.
- `shell` (mostly `bash` and `zsh`): Countless hours spent perfecting little cli tools to automate tasks on my dev machine - often a net loss if we're honest.
- `javascript`: Some limited front-end JS work - I can manage it, but it's definitely not my comfort zone.

{{<note>}}
An honorable mention for `go` - I've not done a massive amount with this yet, but it's what I'm currently teaching myself and I'm pretty enamoured with it so far.
{{</note>}}

## Frameworks :framed_picture:

Java-ish stuff takes up a good chunk of my experience, but the more current / relevant things are:

- Spring
  - Core
  - Data
  - Boot
  - Cloud Functions
- Guice
- Hibernate / JPA
- Various testing tools: JUnit, Mockito, Wiremock, Cucumber JVM, etc.

Outside of Java:

- Entity framework (particularly when combined with linq) was a really useful tool and made me very sad to come back to Hibernate

## Platforms :building_construction:

### AWS

AWS is pretty much it's own category since there's so much going on,but just saying "AWS" doesn't mean much so I'll try to list out some things used:
- Lambdas (in Java, Python, and Typescript) to do an assortment of things - handling GraphQL queries, running file transfers, processing events from SQS and Kafka,
- DMS to sync data from a production DB to a replica for reporting,
- DynamoDB as a data store and source for events,
- ECS to run docker applications without worrying about hosts or clusters.

I've also passed the AWS Solutions Architect Associate certification, which gave a broad but shallow overview of a lot of the popular bits of AWS.

### Assorted project bits

I've worked on a number of projects using some combination of the below platforms for source control, issue tracking, builds, and deployments.

- Github
- Atlassian (Jira, Confluence, Bitbucket)
- Azure DevOps

{{<note>}}
So far my favourite has been "whichever one has been set up sensibly for the team" and my least favourite has been "a one-size-fits-all, centrally-mandated one".
{{</note>}}

## Tools and applications :hammer_and_wrench:

- `Jenkins`: I'd say I'm fairly experienced with Jenkins at this stage since most of my ad-hoc fixing work tends to be around either infra or pipelines - these are usually the areas that other devs shy away from and so they end up neglected, but there's a lot of satisfaction to be had in making a pipeline that runs _really_ smoothly.
- `terraform`: Pretty comfortable with this one, having had it as the de facto IaC tool on several projects.
- `cdk`: Only recently started using this in anger, but so far I'm vastly preferring it to terraform.
- `docker`: Spent a fair bit of time using docker over my recent projects as it seems to be the natural way to package applications.
- `kubernetes`: Not a massive amount of time with this one, but enough to get to grips with the basics - I've enjoyed working with it for the most part, I've found ECS easier in the past but k8s does give you a standard to work with which isn't nothing.
- `liquibase` I've used this a few times for managing schema migrations and I think it's incredibly useful if used correctly.

### Databases

I've spent a fair amount of time building applications which used various flavours of database (`mysql`, `oracle`, `mssql`, `postgres`) and since most of these apps were pretty new, I had the opportunity to deaign the schema or at least try to optimise what was already there.

I've also spent a fair bit of time writing various flavours of SQL stored procedure (for my sins), and I guess that fits into this section more than with "programming languages".

