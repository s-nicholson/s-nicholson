+++
title = 'Experience'
date = 2024-06-11T21:25:05+01:00
layout = 'cv'
+++

I'm an experienced generalist software engineer, currently working in consultancy, always looking to learn new things and solve new problems.

{{<note>}}
Below is a brief summary of my various gigs, plus a little word jumble of the tech I got to play with while I was there.
{{</note>}}
<!--You can also grab my [CV as a PDF here](/files/Sam_Nicholson_CV.pdf).-->

## Right now...

{{<details title="`2021 - Now` **Consultant @ Accenture NGE / Infinity Works**" subtitle="Working across various client accounts in a development role, slotting into an existing team and finding the best way to help out (usually by asking awkward questions and fixing broken things)">}}

I moved into consultancy so I could rotate between client projects - being exposed to different domains and tech stacks - without needing to job hunt.
This was something I never found in "product shops".

Since starting as a consultant I've worked on:

**An event-driven system on Lambda**

Building a resilient, event-driven system from the ground up to replace an existing system built on BPM.
Components of the system are implemented as Java Lambdas (client's choice) using Spring Cloud Functions, deployed using CDK.

`java, aws, kafka, lambda, sqs, dynamodb, cdk, maven, git, jenkins, spring cloud functions, cucumber bdd`

**A distributed-monolith BPM application on kubernetes**

Working in the dev team, but spending a large chunk of my time stabilising the team's kubernetes dev environments to unblock other team members - based on no pre-existing experience with kubernetes.

Also working in the "stabilisation" project to reduce incidents caused by our service (investigating production incidents and implementing code fixes) - our work here reduced incidents by >75%.

`java, kubernetes, jenkins, maven, git, activiti bpm, cucmber bdd`

**An API layer for analyst authoring system**

Building backend API services for data retrieval and aggregation to support the client’s report authoring system for analysts.
Most of te services were in Java, but with a couple of them in C# to make integration with the off-the-shelf CMS easier.
Deploying to on-prem servers via Ansible playbooks and to ECS via CDK - I implemented a tagging and branching strategy to give the team a sane way to deploy code.

`java, aws, ecs, cdk, c#, git, umbraco, odata`

**A GraphQL API layer for data platform**

Building platform and developer tools to allow data-owning teams to expose their datasets to analyst-teams via a federated GraphQL API.
The platform and tooling were developed in typescript and deployed across ECS and Lambda using terraform.
I improved our pipelines and test suites to increase stability and free up dev cycles.

`typescript, graphql, apollo, aws, terraform, git, jenkins, odata, c#`

**A kotlin microservice backend for a mobile app**

Building Spring Boot microservices in kotlin to consume vehcle telemetry data from kafka and serve the processed data to a mobile app.
Learned kotlin for the role and quickly started contributing to the team. Onboarded our services onto the client's audit tooling to unblock our route to production.

`kotlin, psql, mongodb, kafka, pcf, gradle, git, spring boot, cucumber bdd`


{{</details>}}

## Previously...

{{<details title="`2020 - 2021` **Software Engineer @ FanDuel**" subtitle="Java dev on services in Responsible Gaming and Regulatory Reporting" >}}

- Took over as sole dev for the regulatory reporting project (a Java service running mysql stored procedures), delivering new functionality and performance improvements to problematic reporting jobs (reduced run time by ~90%).
- Quickly became an SME, used my knowledge to support the service in production and work with regulators to understand their issues.
- Onboarded contractors to the team and handed over the reporting project to them.

- Also worked on Responsible Gaming features to keep our services compliant with state regulations and provide customers with safety features.

`java, python, mysql, aws, terraform, gradle, git, jenkins, jira, guice, hibernate`

{{</details>}}

{{<details title="`2018 - 2020` **Software Engineer @ Pinsent Masons**" subtitle="Java/C# dev working in the SmartDelivery team delivering webapps for fee-earners and clients" >}}

- Worked as a dev across the SmartDelivery team's main apps - a C# webapp and a legacy Java forms engine.
- Spent a lot of time understanding the Java app and documenting it's features to make it easier to use.
- Introduced gitflow to allow a more sane release process.
- Spent a few days rewriting the main screens of the C# app to reduce page load times that were frustrating users.

`java, c#, javascript, xml, xslt, mssql, mongodb, maven, gradle, git, spring, liferay`

{{</details>}}

{{<details title="`Jul 2017 - Dec 2017` **Analyst @ Accenture**" subtitle="A brief stint in the Live Support team, supporting HMRC applications written in C/C++ and Java" >}}

- Investigating live issues in HMRC National Insurance systems, debugging code, and implementing fixes.
- Got up to speed in a short space of time, including learning internal project-specific tooling and teaching myself some perl.

`c/c++, perl, bash, sybase, oracle, git, gerrit, vim`

{{</details>}}

{{<details title="`2014 - 2017` **Software Engineer @ BT**" subtitle="Java developer working in the Energy team, developing internal applications to monitor and manage the company's energy usage" >}}

- Worked on the PEMS application which was allowed BT to participate in Triad and STOR schemes from the National Grid.
- Developed a data-driven query framework which allowed the us to deliver reports to the stakeholders quickly and without the need to release code.

`java, bash, javascript, oracle, plsql, maven, svn, jenkins, vaadin`

{{</details>}}

## And before that...

{{<details title="`2010 - 2014` **Computer Science with Industrial Placement @ Newcastle University**" subtitle="Graduated with 1st Class BSc (Hons)" >}}

My undergraduate degree was mostly theory with a few modules which were more focussed on practical elements, but not a huge amount of things which would be drectly transferable to professional software engineering.

The course did give me a foundational understanding of programming (including giving me my first taste of Java :coffee:) and touched briefly on a lot of other topics (networking, database technologies, cryptography, graphics, etc.) - giving me just enough knowledge in each space to be dangerous.

`java, javascript, php, c++, mysql, android`

**Placement @ BT**

I spent the placement year of my degree (Sep 2012 - Aug 2013) at BT as a Technical Undergrad working on the fledgling Energy Team - this involved a lot of PoC work, and to be honest we were probably given a lot more freedom to try things than I'd expect for a team of juniors in an enterprise. I learned a lot and managed to take some of the development practices back with me for my dissertation project.

`java, bash, javascript, oracle, maven, svn`

{{</details>}}
