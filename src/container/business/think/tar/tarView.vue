<template>
<div class="tarView">
  <div id="example" class="k-content">
    <div id="scheduler"></div>
  </div>
</div>
</template>
<script>
const $ = window.$
export default {
  data () {
    return {

    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.calender()
    }, 3000)
  },
  methods: {
    calender () {
      $('#scheduler').kendoScheduler({
        date: new Date('2013/6/13'),
        startTime: new Date('2013/6/13 07:00 AM'),
        height: 600,
        views: [
          'day',
          { type: 'week', selected: true },
          'month',
          'agenda',
          'timeline'
        ],
        timezone: 'Etc/UTC',
        dataSource: {
          batch: true,
          transport: {
            read: {
              url: 'https://demos.telerik.com/kendo-ui/service/meetings',
              dataType: 'jsonp'
            },
            update: {
              url: 'https://demos.telerik.com/kendo-ui/service/meetings/update',
              dataType: 'jsonp'
            },
            create: {
              url: 'https://demos.telerik.com/kendo-ui/service/meetings/create',
              dataType: 'jsonp'
            },
            destroy: {
              url: 'https://demos.telerik.com/kendo-ui/service/meetings/destroy',
              dataType: 'jsonp'
            },
            parameterMap: function (options, operation) {
              if (operation !== 'read' && options.models) {
                return options.models
                // return {models: kendo.stringify(options.models)}
              }
            }
          },
          schema: {
            model: {
              id: 'meetingID',
              fields: {
                meetingID: { from: 'MeetingID', type: 'number' },
                title: { from: 'Title', defaultValue: 'No title', validation: { required: true } },
                start: { type: 'date', from: 'Start' },
                end: { type: 'date', from: 'End' },
                startTimezone: { from: 'StartTimezone' },
                endTimezone: { from: 'EndTimezone' },
                description: { from: 'Description' },
                recurrenceId: { from: 'RecurrenceID' },
                recurrenceRule: { from: 'RecurrenceRule' },
                recurrenceException: { from: 'RecurrenceException' },
                roomId: { from: 'RoomID', nullable: true },
                attendees: { from: 'Attendees', nullable: true },
                isAllDay: { type: 'boolean', from: 'IsAllDay' }
              }
            }
          }
        },
        resources: [
          {
            field: 'roomId',
            dataSource: [
              { text: 'Meeting Room 101', value: 1, color: '#6eb3fa' },
              { text: 'Meeting Room 201', value: 2, color: '#f58a8a' }
            ],
            title: 'Room'
          },
          {
            field: 'attendees',
            dataSource: [
              { text: 'Alex', value: 1, color: '#f8a398' },
              { text: 'Bob', value: 2, color: '#51a0ed' },
              { text: 'Charlie', value: 3, color: '#56ca85' }
            ],
            multiple: true,
            title: 'Attendees'
          }
        ]
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.tarView
  width 100%
  height 100%
  padding 10px
</style>
