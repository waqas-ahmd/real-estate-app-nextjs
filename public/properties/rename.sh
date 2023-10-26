#!/bin/bash

# Counter to track the new names
counter=1

# Navigate to the current directory
cd "$(dirname "$0")"

# Loop through each JPEG file in the current directory
for file in *.jpg; do
  if [ -f "$file" ]; then
    # Generate the new name with a two-digit padded counter
    new_name="img_$(printf "%02d" $counter).jpg"
    mv "$file" "$new_name"
    ((counter++))
  fi
done
