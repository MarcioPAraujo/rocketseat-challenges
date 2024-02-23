
git add .
read -p 'Commit description: ' COMMIT_DESC
git commit -m "$COMMIT_DESC"
git push