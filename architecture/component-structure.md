# Component Structure

## Component Diagram

```mermaid
flowchart TB
  AppLayout[App Layout] --> Navbar[Navbar]
  AppLayout --> PageContent[Page Content]
  AppLayout --> Footer[Footer]

  PageContent --> Hero[Hero]
  PageContent --> ThreatDashboard[ThreatDashboard]
  PageContent --> SecurityMetrics[SecurityMetrics]
  PageContent --> Solutions[Solutions]
  PageContent --> PlatformWorkflow[PlatformWorkflow]
  PageContent --> Compliance[Compliance]
  PageContent --> CaseStudies[CaseStudies]
  PageContent --> Testimonials[Testimonials]
  PageContent --> FAQ[FAQ]
  PageContent --> CTA[CTA]

  ThreatDashboard --> ThreatCard[ThreatCard]
  SecurityMetrics --> SecurityMetricCard[SecurityMetricCard]
  Solutions --> SolutionCard[SolutionCard]
  Compliance --> ComplianceBadge[ComplianceBadge]
  CaseStudies --> CaseStudyCard[CaseStudyCard]
  SecurityReportPage[Security Report Page] --> SecurityReportCard[SecurityReportCard]
  ContactPage[Contact Page] --> ContactForm[ContactForm]

  SharedUI[Shared UI] --> Button[Button]
  SharedUI --> Card[Card]
  SharedUI --> Badge[Badge]
  SharedUI --> Section[Section]
  SharedUI --> Input[Input]
  SharedUI --> Textarea[Textarea]
  SharedUI --> Select[Select]
```

## Explanation

The application follows a three-tier component hierarchy:

1. **Layout** (`Navbar`, `Footer`) — persistent chrome on every page
2. **Sections** — composable marketing blocks used on the home page and reused across routes
3. **Security components** — domain-specific cards and forms that sections and pages import

Shared UI primitives (`Button`, `Card`, `Badge`, form inputs) provide consistent styling and behavior. Data flows from `data/*.ts` into security components and sections — components do not fetch from APIs.

Pages in `app/` are thin orchestrators that import and arrange sections.
