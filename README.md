# React Timeline Component

Vertical timeline component.  Displays a column of events, each with a date, title and body.  

Each event appears inside a callout container, alongside a vertical line with circles at each event.

## Using the Compoenent

Import the Timeline component and use in your app as follows:

    import Timeline from './Timeline/Timeline';
    import data from '../data/timelineData.json';

    ...

        <Timeline
            timedata={data}
            graphicWidth={120}
            linePosition={104} />

The options at the top level are:

* timedata - the array of events
* graphicWidth - width in px for the left section, containing date tag and vertical line with circles
* linePosition - the distance in pixels from the left edge to the vertical line

## Data

Data will generally come from an API response and should be transformed into the following shape:

    [
        {
            "date": "21 Aug",
            "title": "First Timeline Item",
            "body": "A short note about a thing that happened"
        },
        { ... }
    ]

## TimelineElement options

    TimelineElement.propTypes = {
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        showBottomLine: PropTypes.bool.isRequired,
        graphicWidth: PropTypes.number,
        lineLeft: PropTypes.number,
        strokeWidth: PropTypes.number,
        dateBoxHeight: PropTypes.number,
        dateBoxWidth: PropTypes.number,
        dateFontSize: PropTypes.number,
        elementMargin: PropTypes.number
    };

    TimelineElement.defaultProps = {
        graphicWidth: 100,
        lineLeft: 75,
        strokeWidth: 2,
        dateBoxHeight: 20,
        dateBoxWidth: 50,
        dateFontSize: 12,
        elementMargin: 5
    }