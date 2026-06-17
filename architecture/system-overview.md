# System Overview

## Architecture Diagram

```mermaid
flowchart TB
  Visitor[Visitor] --> Website[ShieldOps Security Website]

  Website --> Home[Home Page]
  Website --> Solutions[Solutions Page]
  Website --> Platform[Platform Page]
  Website --> CaseStudies[Case Studies Page]
  Website --> SecurityReport[Security Report Page]
  Website --> Contact[Contact Page]

  Home --> Hero[Hero]
  Home --> ThreatDashboard[Threat Dashboard]
  Home --> SecurityMetrics[Security Metrics]
  Home --> SolutionsSection[Solutions]
  Home --> PlatformWorkflow[Platform Workflow]
  Home --> Compliance[Compliance]
  Home --> CaseStudiesSection[Case Studies]
  Home --> CTA[CTA]

  Contact --> ContactForm[Consultation Form]
  ContactForm --> FutureCRM[Future CRM Integration]
  ContactForm --> FutureEmail[Future Email Notification]
```

## Explanation

Visitors arrive at the ShieldOps Security marketing website and navigate across six primary routes. The home page serves as the main conversion funnel, combining product demonstration (threat dashboard), trust building (metrics, compliance, case studies), and repeated calls to action.

The contact page captures consultation requests through a structured form. In a production deployment, this form would connect to a CRM and email notification system — currently UI-only for portfolio demonstration.

All pages share a common layout (navbar + footer) and pull content from static TypeScript data files, making the site fast to deploy and easy to maintain.
