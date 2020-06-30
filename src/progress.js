import React from "react";
import { ProgressTracker } from '@atlaskit/progress-tracker';

const items = [
    {
        id: 'disabled-1',
        label: 'Idea',
        percentageComplete: 100,
        status: 'visited',
        noLink: true,
    },
    {
        id: 'visited-1',
        label: 'Design',
        percentageComplete: 0,
        status: 'visited',
        noLink: true,
    },
    {
        id: 'current-1',
        label: 'Write Implementation',
        percentageComplete: 0,
        status: 'unvisited',
        noLink: true,
    },
    {
        id: 'unvisited-1',
        label: 'Release Alpha',
        percentageComplete: 0,
        status: 'unvisited',
        noLink: true,
    },
    {
        id: 'unvisited-2',
        label: 'Release Beta',
        percentageComplete: 0,
        status: 'unvisited',
        noLink: true,
    },
    {
        id: 'unvisited-2',
        label: 'General Release',
        percentageComplete: 0,
        status: 'unvisited',
        noLink: true,
    }
];

export default () => <ProgressTracker items={items} style={{color: "#a2f"}}/>;
