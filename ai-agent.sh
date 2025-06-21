#!/bin/bash

REPO_DIR="/Users/kevin/OmniLearn-AI"
cd "$REPO_DIR"

echo "[🧠 AI Agent] Running..."

# Pull latest AI-authored instructions
git pull origin main

# Run future command file (editable by AI)
if [ -f "$REPO_DIR/ai-instructions.sh" ]; then
  chmod +x "$REPO_DIR/ai-instructions.sh"
  "$REPO_DIR/ai-instructions.sh"
fi

