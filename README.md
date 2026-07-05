# AI-Flashcard-Generator
A full-stack AI-powered flashcard application featuring automated deck generation from text/PDFs, dynamic background processing status tracking, and an optimized spaced-repetition core built on the SM-2 algorithm using Next.js and MongoDB.


# BrainSprout AI — Intelligent Flashcard Generator

BrainSprout AI is a full-stack web application that leverages Large Language Models (LLMs) to automatically convert dense learning materials (text, PDFs, or audio) into high-quality, study-ready flashcard decks. The platform incorporates a sophisticated spaced-repetition review loop based on the SM-2 algorithm to optimize memory retention over time.

## 🚀 System Architecture & Layouts

The application is structured around an MVP scope consisting of 8 primary workflows:
1. **Landing Page:** Entry point demonstrating product value and core features.
2. **Auth Gateway:** Secure user onboarding and JWT-based session management.
3. **Library Dashboard:** Personal hub displaying user decks, search filters, and creation access.
4. **Creator Studio:** Document/text upload zone targeting background processing.
5. **Processing Pipeline:** Real-time state indicator for background asset extraction and AI synthesis.
6. **Deck Inspector:** Granular Q&A manager allowing manual card additions, edits, and deletions.
7. **Active Review Session:** Flashcard study loop powered by cognitive scheduling.
8. **Performance Tracker:** Usage dashboards showcasing consistency streaks, accuracy metrics, and account state.

---

## 💾 Database Architecture (MongoDB Document Model)

The system relies on three closely related collections, optimizing for high-speed document retrieval by embedding real-time application states directly inside parent records.

### 1. Decks Collection (`decks`)
```javascript
{
  _id: ObjectId,
  userId: ObjectId (Indexed),
  title: String,
  subject: String,
  status: Enum["processing", "ready", "failed"], // Background status indicator
  createdAt: Timestamp
}
