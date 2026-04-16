---
layout: base.njk
title: Automated LiDAR classification
summary: Working with the International Federation of Pedestrians (IFP) and their Sidewalk Scanner, this project is centered around building an algorithm that takes in a Raw LiDAR pointcloud as an input, and runs a classification that automates the classification of Sidewalks and roads.
stack:
  - Python
  - ML
  - Data Preprocessing
keywords:
  - Data Pipelines
  - Geospatial Analysis
  - Automation
date: 2026-01-20
repo: https://github.com/jammy-data/lidar_sidewalks
---
## Overview

We use roads and sidewalks every day, but rarely stop to consider how accessible they truly are. How narrow are the walkways? Is the surface uneven? Are parked vehicles obstructing the path?

These details matter. Urban planners often note that infrastructure is most successful when it goes unnoticed. It functions so seamlessly that people never have to think about it. Achieving that standard is a constant goal in city planning.

To support this effort, IFP collects 3D scans of streets, capturing features such as roads, sidewalks, parked cars, trees, and street furniture. To a computer, however, this data appears as a dense “point cloud” composed of geometric and radiometric information.

The challenge is to process these point clouds and use a combination of machine learning, deep learning, and geometric techniques to automatically identify and distinguish streets from sidewalks - a task more complex than it may initially seem.

## Why It Matters

Explain the value in clear terms.

## Next Steps

List upcoming improvements.
