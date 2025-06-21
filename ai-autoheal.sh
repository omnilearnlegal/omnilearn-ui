#!/bin/bash

LOG="/Users/kevin/OmniLearn-AI/health-check.log"
BACKUP_DIR="/Users/kevin/OmniLearn-AI-backups"
DEPLOY_HOOK_URL="https://api.vercel.com/v1/integrations/deploy/prj_8njDPkaf6Pk1uocFKBm1R5QQrKgP/HCR7MBN2nF"

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")

if grep -q "last_checkin: pending" "$LOG"; then
  echo "[$(date)] 🚑 AI Autoheal Triggered – System flagged as unhealthy." >> "$LOG"

  # Backup current state
  cp -r /Users/kevin/OmniLearn-AI "$BACKUP_DIR/backup_$TIMESTAMP"

  # Trigger Vercel redeploy
  curl -X POST "$DEPLOY_HOOK_URL"

  # Update log
  echo "last_checkin: $(date)" > "$LOG"
else
  echo "[$(date)] ✅ System healthy – no autoheal needed." >> "$LOG"
fi
