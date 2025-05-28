#!/bin/bash

# Render the main site (Japanese)
quarto render

# Render the English site
cd en
quarto render
cd ..

echo "Site rendered successfully. Both Japanese and English versions are now available." 