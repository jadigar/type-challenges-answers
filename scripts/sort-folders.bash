#!/bin/bash

# Create directories for different types if they don't exist
mkdir -p ./questions/easy
mkdir -p ./questions/medium
mkdir -p ./questions/hard
mkdir -p ./questions/extreme

# Move files to their respective directories
mv ./questions/*-easy-* ./questions/easy/
mv ./questions/*-medium-* ./questions/medium/
mv ./questions/*-hard-* ./questions/hard/
mv ./questions/*-extreme-* ./questions/extreme/
