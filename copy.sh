#!/bin/bash

 for file in ./*; do
echo "$file:"
cat "$file"
done

 for file in ./pages/*; do
echo "$file:"
cat "$file"
done

 for file in ./js/*; do
echo "$file:"
cat "$file"
done

 for file in ./css/*; do
echo "$file:"
cat "$file"
done
