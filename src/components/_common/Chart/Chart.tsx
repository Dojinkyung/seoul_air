import { VictoryBar, VictoryChart, VictoryTooltip, VictoryVoronoiContainer, VictoryAxis } from 'victory'

interface props {
  data1: { x: string; y: number; label: string }[]
  data2: { x: string; y: number; label: string }[]
}
const Chart = (props: props) => {
  const { data1 } = props
  const { data2 } = props
  return (
    <div>
      <VictoryChart containerComponent={<VictoryVoronoiContainer />} domainPadding={{ x: 40, y: [0, 20] }}>
        <VictoryAxis
          standalone={false}
          style={{
            axis: { stroke: 'transparent' },
            ticks: { stroke: 'transparent' },
            grid: { stroke: 'transparent' },
            tickLabels: { fontSize: 12, padding: 5, fill: '#94A2AD' },
          }}
        />
        <VictoryAxis
          dependentAxis
          orientation='right'
          standalone={false}
          style={{
            axis: { stroke: 'transparent' },
            grid: { stroke: '#EDEFF1', strokeWidth: 2, strokeDasharray: 'none' },
            ticks: { stroke: 'transparent', strokeWidth: 2, size: 2 },
            tickLabels: { fontSize: 12, fill: '#94A2AD' },
          }}
        />
        <VictoryBar
          animate={{
            duration: 2000,
            onLoad: { duration: 500 },
          }}
          cornerRadius={{
            topLeft: 15,
            topRight: 15,
          }}
          barRatio={0.8}
          style={{ data: { fill: '#3e82ef' } }}
          data={data1}
          labelComponent={
            <VictoryTooltip
              flyoutWidth={150}
              flyoutPadding={{ top: 0, bottom: 0, left: 10, right: 10 }}
              flyoutStyle={{
                stroke: 'none',
                fill: 'white',
              }}
            />
          }
        />
      </VictoryChart>
      <VictoryChart containerComponent={<VictoryVoronoiContainer />} domainPadding={{ x: 80, y: [0, 20] }}>
        <VictoryAxis
          standalone={false}
          style={{
            axis: { stroke: 'transparent' },
            ticks: { stroke: 'transparent' },
            grid: { stroke: 'transparent' },
            tickLabels: { fontSize: 12, padding: 5, fill: '#94A2AD' },
          }}
        />
        <VictoryAxis
          dependentAxis
          orientation='right'
          standalone={false}
          style={{
            axis: { stroke: 'transparent' },
            grid: { stroke: '#EDEFF1', strokeWidth: 2, strokeDasharray: 'none' },
            ticks: { stroke: 'transparent', strokeWidth: 2, size: 2 },
            tickLabels: { fontSize: 12, fill: '#94A2AD' },
          }}
        />
        <VictoryBar
          standalone={false}
          animate={{
            duration: 2000,
            onLoad: { duration: 500 },
          }}
          cornerRadius={{
            topLeft: 15,
            topRight: 15,
          }}
          barRatio={0.8}
          style={{ data: { fill: '#65d866' }, parent: { border: '1px solid #ccc' } }}
          data={data2}
          labelComponent={
            <VictoryTooltip
              flyoutWidth={150}
              flyoutPadding={{ top: 0, bottom: 0, left: 10, right: 10 }}
              flyoutStyle={{
                stroke: 'none',
                fill: 'white',
              }}
            />
          }
        />
      </VictoryChart>
    </div>
  )
}
export default Chart
