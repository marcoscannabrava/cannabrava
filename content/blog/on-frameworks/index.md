---
title: "Frameworks: Standing on the Shoulders of Giants or Complexity Monster?"
date: "2025-05-30T00:00:00.000Z"
description: "why re-use time-tested software when you can raw-dog it with nothing but your compiler and cojones?"
---

# Frameworks: Standing on the Shoulders of Giants or Complexity Monster?

Few decisions spark as much online flame wars as the "frameworks vs. raw-dogging" debate. Should you stand on the shoulders of giants? Or should you raw-dog it like Carmack and Notch, building from first principles with nothing but your compiler and cojones?

This isn't just a technical decision. For some, it defines your worth as a programmer. Are you only a cracked dev if you build everything from scratch? Are framework users all n00bs?

I'll take a bold risk here and say the answer is clear, no nuance, just as the algorithm likes it. It also contradicts programmers far more talented than me... Honestly I must be wrong so you can either stop reading, educate me, or just insult me. All of those can be positive outcomes. Because for 99% of projects and 99% of developers, **frameworks are the only sane choice.**

## The Case For Frameworks: Standards, Ecosystem, Humility

I'll begin by saying how much I loathe ORMs, yet I never dared suggest not using one, or at least a query builder, in any serious project. React's unnecessary code bloat? I've been using it daily for almost a decade and never built a date picker from scratch. I still have nightmares from Rails "magic" but I'd never challenge DHH on its merits (or anything else for that matter). MVC, ActiveRecord, middleware, auth, gems are lifting a lot of the heavy weight for you.

These are examples of pragmatism and hint at what I mean by:
- **Standards** — common language and patterns instead of ad-hoc practices
- **Ecosystem** — leveraging other people's work instead of reinventing every wheel  
- **Humility** — deferring to the collective wisdom of experts and time-tested solutions

What sparked me to write this essay is the last couple of years deep in the **AI shifting sands landscape**. For the first time, I'm witnessing the need to create a whole new edifice of abstractions/frameworks to deal with a completely new software entity that speaks natural language. Some of these problems are actually new.

### A Counter Example: The AI Shifting Sands

The AI space is the modern Wild West where frameworks are dueling for relevance in real-time.

At the provider level, OpenAI established the current standard of REST API for text completion and tool calling. While not set in stone, many players have already made their APIs OpenAI-compliant acknowledging the wisdom in some of their design choices.

One abstraction layer up, LangChain showed up early with its SDK solving problems like Chain of Thought, RAG, and AI agents and, here, it's a dog-eat-dog world. A constant in my career over the past two years has been helping companies migrate *off* LangChain and similar frameworks. The words and sentences in this new language of AI models haven't been created yet. Although some like Instructor seem to be holding their ground, the "AI" frameworks landscape is carnage.

Some quick code examples show the emerging philosophies and current Tower of Babel that is our lack of common language:

**Haystack** (RAG-focused component pipelining):
```python
from haystack import Pipeline
from haystack.components.generators.chat import OpenAIChatGenerator
from haystack.components.embedders import OpenAITextEmbedder
from haystack.components.retrievers.in_memory import InMemoryEmbeddingRetriever

rag_pipeline = Pipeline()
rag_pipeline.add_component("embedder", OpenAITextEmbedder())
rag_pipeline.add_component("retriever", InMemoryEmbeddingRetriever())
rag_pipeline.add_component("generator", OpenAIChatGenerator())
rag_pipeline.connect("embedder.embedding", "retriever.query_embedding")
rag_pipeline.connect("retriever.documents", "generator.rag_documents")
```

**DSPy** (generic building blocks):
```python
import dspy

class ResearchAgent(dspy.Module):
    def __init__(self, num_passages=3):
        super().__init__()
        self.retrieve = dspy.Retrieve(k=num_passages)
        self.generate_answer = dspy.ChainOfThought("context, question -> answer")

    def forward(self, question):
        context = self.retrieve(question).passages
        prediction = self.generate_answer(context=context, question=question)
        return dspy.Prediction(answer=prediction.answer)
```

This is the current chaos of frameworks attempting to uncover the right abstractions and generalize solutions to common problems. Even though some concepts are clear like embeddings, retrieval, completion, tool-calling, there's no grammar to put it all together yet. This is precisely the stage where I have to admit frameworks are less useful and often outright dangerous. This is not true for most of the problems we deal with day-to-day.

### Standards: Common Language

Frameworks establish shared vocabulary and common patterns. When a new developer joins your React team, they already understand `useState`, `useEffect`, component lifecycle, and JSX. The onboarding conversation shifts from "how does our bespoke, undocumented rendering system work?" to "how do we organize components and manage state within this established paradigm?"

This standardization translates directly to **team velocity**. Feature implementation is faster. Code comprehension is easier. Debugging doesn't rely on that one guy who built the system and is off the day prod hits a snag. Code reviews focus on business logic rather than deciphering novel architectural choices.

Every time you decide to raw-dog it on any project of significant complexity, you inevitably end up building your own homemade, undocumented, bug-ridden, and probably less-performant micro-framework. One that only you (and maybe, after much suffering, your closest colleagues) understand.

### Ecosystem: Cyber Bazaar

Let's say you're a 100x coder that can rewrite React in a weekend, in Rust, cleaner, and faster.

Now what about state management? Routing? Data fetching with caching and optimistic updates? UI component libraries? Animation frameworks? Internationalization tools? Testing utilities? Server-side rendering? Static site generation?

The most compelling argument for frameworks is **everything that orbits around them**. When you choose React, you're not just getting a rendering library. You're accessing hundreds of thousands of npm packages, documentation, tutorials, Stack Overflow answers, LLMs well-trained on this body of knowledge, and millions of developer-hours on problems you haven't even considered, are not in your wheelhouse, or you may be vastly underestimating.

Even legends like Carmack, Notch, The Primeagen, Casey Muratori, or Linus Torvalds don't (and don't want to) master every aspect of software development. They too build on abstractions — compilers, operating system APIs, hardware drivers. Ecosystems enable you to shop around for the tools you need.

> [The Cathedral and The Bazaar by Eric S. Raymond](http://www.catb.org/esr/writings/cathedral-bazaar/)

### Humility: Acknowledge Wisdom

Choosing a mature framework is an act of **humility** — acknowledging that your problem is not unique and others have given it a lot of thought, perhaps with a lot more relevant experience than you.

Consider Django's ORM again. On the surface, it's just database abstraction. But examine it closer:

```python
# This innocent-looking query...
recent_users = User.objects.filter(posts__created_at__gte=datetime.now() - timedelta(days=30), email=email).select_related('profile').order_by('-last_login')

# ...silently orchestrates:
# 1. SQL injection prevention
# 2. Connection pooling and management
# 3. Timezone conversions
# 4. Database-specific SQL dialect generation
# 5. Lazy vs. eager loading
# 6. Query optimization hints
# 7. Transaction management
# 8. String input escaping
# 9. Consistent database error handling
# 10. Schema migration awareness
```

Could you implement all of that correctly, robustly, and efficiently for every project you work on? Even if you're Michael Stonebraker, the honest answer is no.

Any piece of code distills wisdom, sometimes arcane, they may carry solutions to subtle security vulnerabilities, obscure performance bottlenecks, tricky concurrency issues, and edge-case bugs.

More importantly, frameworks encode battle-tested design decisions — the Active Record pattern, MVC architecture — proven across countless projects. The key is knowing when these abstractions break (which they do), hence why experienced programmers often lean toward custom solutions, burned by past framework limitations.

## The Case Against Frameworks: The Simplicity Illusion

Beyond "simplicity," other common arguments include "control" and "performance." These occasionally point to legitimate cases where custom solutions might excel. Recognizing when frameworks can't provide sufficient control or performance requires case-by-case evaluation.

However, the simplicity argument feels more pervasive and deceptive. "No-framework is simpler!" I'm yet to see custom code not rapidly devolve into a tangled mess of utilities, implicit conventions, and unstated assumptions — a fragile, unmaintainable ad-hoc framework of your own making. Well-designed frameworks provide *effective simplicity* by managing underlying complexity.

Yes, there are domains where you *must* go to the metal and every nanosecond counts, or where problems are so unique that no existing framework applies. These are the 1%.

These are hard problems, if you must create your own framework, be sure to spend the time on some upfront design. BDUF (Big Design Up Front) has done too much damage to our industry because of people who overshoot with no design at all. It's advisable to start minimally with a solution scoped to the problem at hand but using that as an excuse to not even think ahead is just dumb. The most enduring ventures in the world did not survive on "winging it". They're built on hierarchy and planning. If you're thinking about pulling the "natural evolutionary systems" argument on me, I sure hope you have a billion years to prove your point

If you're building web applications, mobile apps, data pipelines, or business tools, chances are you're dealing with the 99% of solved problems in the world.

## Conclusion: Be Like Newton

For any project of non-trivial complexity, the answer is clear: **use a framework.**

You gain:
- **Speed:** Through standards and pre-built components
- **Reliability:** Through battle-tested code and security practices  
- **Maintainability:** Through shared conventions and vocabulary
- **Ecosystem:** Access to tools, libraries, and talent
- **Quality:** By leveraging solutions to problems you didn't know existed

In the end simplicity always wins, and a well-chosen framework abstracts immense underlying complexity, almost always beating the superficial simplicity of starting with a blank file.

Remember: you can **start without a framework, but you will end with one**. It's usually best to end with one you didn't create alone.
