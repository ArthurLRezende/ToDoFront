import { Pie, PieChart, Tooltip, ResponsiveContainer } from 'recharts';


const Grafico = () => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart height={100} width={100}>
                <Pie
                    activeShape={{
                        fill: '#df610dff',
                        stroke: '#57e898ff',
                    }}
                    data={[
                        { name: 'Page A', uv: 300, fill: '#57c0e8' },
                        { name: 'Page B', uv: 590, fill: '#df610dff' },
                        { name: 'Page C', uv: 868, fill: '#57e898ff' },
                    ]}
                    dataKey="uv"
                />
                <Tooltip defaultIndex={2} />
            </PieChart>
        </ResponsiveContainer>
    )

}

export default Grafico