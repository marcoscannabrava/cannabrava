---
title: Small Language Models (SLMs)
date: "2025-01-07T00:00:00.000Z"
description: "exploring models that carry more than their weight"
---

#### why

Efficient to deploy, fast, and actually really good!

For people who can actually architect systems of agents, it's striking me more and more as a better alternative to calling the heavy-weights when you can get more targeted, faster, context-aware predictions with smaller and specialist models. My latest explorations with DeepSeek Coder 8B and Phi 3 left me with a really good impression of the current state of the short kings.

Some reasons I'm excited.

1. **modular development and simplified audits**
You can actually apply system design thinking and you're not betting your business on some miracle moody API. The overreliance on these APIs for literally anything these days reminds me of [God objects](https://en.wikipedia.org/wiki/God_object). The smaller size of SLMs also lowers the barrier for conducting audits, verification, and customization to meet regulations. It’s easier to understand how the model processes data, and implement your own encryption or logging.

2. **running on isolated and low-end hardware**
SLMs can operate almost anywhere: from a local server in a private network to a doctor’s or inspector’s device. The edge is here. Robots, cars, drones.

3. **distributed security architecture**
Unlike the monolithic architecture of LLMs, where all security components are “baked” into one large model, SLMs enable the creation of a distributed security system.

4. **overindexing on llms can lead to unexpected results**
They're non-deterministic machines after all, and the larger the task we give them, the worse they perform. Add to that the current providers are not reliable at all. Check OpenAI's or Anthropic's status pages and not a week goes by without downtime.

5. **money $$$**
This definitely should not be last but, in the age of VC-fueled bonanza we live in, it's easy to forget. Most AI startups' business models simply will not survive LLM unit-economics long-term. The bet is on some massive efficiency improvements, which although likely to some degree, might not happen in the scale these businesses expect. Let's not forget [OpenAI itself is losing money on their most expensive plan](https://x.com/sama/status/1876104315296968813) and Uber is still not profitable after 15 years. At some point the bill arrives. Meanwhile connect a high-pressure pipe from your wallets straight to NVIDIA's headquarters.

#### how

Setting up a runtime like [vLLM](https://vllm.readthedocs.io/) on [AWS INF2](https://aws.amazon.com/ai/machine-learning/inferentia/) has shown some promising results in my testing. I absolutely love the work AWS is doing with the Inferentia chips. More realistically, for production workloads, you'd get started with an offering from Google Vertex AI or AWS Bedrock suite of products. Deploying them on the edge can be done with Microsoft's [ONNX](https://onnxruntime.ai/) or even [WASM](https://wasmedge.org/docs/category/ai-inference/).

#### what

Probably* you are not going to be doing image/video-generation with those models but CV, NLP, and function calling are all doable.
<br/>**I don't know honestly, maybe soon.*

Some real-life examples:
- Summarizing domain-specific documents like regulations. *#phi-3.5*
- Smart summarization where you split documents in logical sections instead of dumping everything in a mega prompt. *#phi-3.5*
- Generating marketing collateral, snippets, personalized customer support responses. *#phi-3.5*
- Digitization of images and handwritten text. *#MiniCPM-Llama3-V2.5*
- Data extraction for both structured and unstructured data. *#MiniCPM-Llama3-V2.5*
- Content Moderation *#LLaMA3.18B*
- Retail demand forecasting *train your own with AutoML*
- Helpdesk support and routing *#LLaMA3.18B*
- Diabetes tests! *#Diabetica-7B*


#### interesting

- [NVIDIA NIM for Generative AI](https://www.nvidia.com/en-us/ai/)
- [Projects | LMSYS Org](https://lmsys.org/projects/)
- [How Multimodal Models Work and Top 10 Multimodal Models](https://encord.com/blog/top-multimodal-models/)
- [Building your own SLMs](https://hatchworks.com/blog/gen-ai/small-language-models/)
- [Small Language Models for enterprise AI: Benefits and deployment | Deviniti](https://deviniti.com/blog/enterprise-software/small-language-models-for-enterprise-ai/)


#### models

- Vision tasks
  - [openbmb/MiniCPM-Llama3-V-2_5](https://huggingface.co/openbmb/MiniCPM-Llama3-V-2_5)
  - [microsoft/Phi-3-vision-128k-instruct](https://huggingface.co/microsoft/Phi-3-vision-128k-instruct)
  - [OpenGVLab/InternVL2_5-8B-MPO](https://huggingface.co/OpenGVLab/InternVL2_5-8B-MPO)

- Qwen family doing great
  - [Qwen2-Audio-7B-Instruct](https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct)
  - [Qwen2-VL-7B-Instruct](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct)
  - [Qwen2.5-7B-Instruct-GPTQ-Int4](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct-GPTQ-Int4)

- Optimized for function calling:
  - [watt-ai/watt-tool-8B](https://huggingface.co/watt-ai/watt-tool-8B) — *haven't tried it but I'm curious that Berkeley is saying this tiny unknown model is head-to-head with GPT 4o*

- General NLP
  - [microsoft/Phi-3.5-mini-instruct-onnx](https://huggingface.co/microsoft/Phi-3.5-mini-instruct-onnx)
  - [Llama-3.1-8B](https://huggingface.co/meta-llama/Llama-3.1-8B)


I only put open-source models above but Gemini Flash reserves an honorable mention.

#### leaderboards

- [Chatbot Arena (LMSys)](https://lmarena.ai/)
- [opencompass)](https://huggingface.co/opencompass)
- [LLM Leaderboard 2024](https://www.vellum.ai/llm-leaderboard)
- [SEAL LLM Leaderboards: Expert-Driven Private Evaluations](https://scale.com/leaderboard)


#### resources

- [Small Language Models (SLMs) [2024 overview] | SuperAnnotate](https://www.superannotate.com/blog/small-language-models)
- [Your Company Needs Small Language Models - When specialized models outperform general-purpose models (Sergei Savvov)](https://towardsdatascience.com/your-company-needs-small-language-models-d0a223e0b6d9)
- [Top 15 Small Language Models for 2024](https://www.datacamp.com/blog/top-small-language-models)
- [Small Language Model (SLM or SMLM)](https://www.symphonyai.com/glossary/ai/slm-or-smlm-small-language-model/)


#### papers
- [A Survey of Small Language Models](https://arxiv.org/abs/2410.20011)
- [A Comprehensive Survey of Small Language Models in the Era of Large Language Models: Techniques, Enhancements, Applications, Collaboration with LLMs, and Trustworthiness](https://arxiv.org/abs/2411.03350)