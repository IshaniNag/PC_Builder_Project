/*import { Badge, Button, Divider, List, Modal, Skeleton } from "antd";
import { useRouter } from "next/router";
import { useContext } from "react";
import { PcContext } from "@/context/PcContext";
import IsMobile from "@/hooks/isMobile";
import { anton } from "../_app";

const PcBuild = () => {
	const router = useRouter();
	const { setIsPcBuilding, pcData, deleteFromPcBuilder, setPcData } = useContext(PcContext);
	const { isMobileScreen } = IsMobile();
	const [modal, contextHolder] = Modal.useModal();
	const countDown = () => {
		let secondsToGo = 5;

		const instance = modal.success({
			title: 'Successfully Built',
			content: `Thank You for order the pc, we will reach you soon!`,
		});

		const timer = setInterval(() => {
			secondsToGo -= 1;
			instance.update({
				content: `Thank You for order the pc, we will reach you soon!`,
			});
		}, 1000);

		setTimeout(() => {
			clearInterval(timer);
			instance.destroy();
			setPcData(null);
			setIsPcBuilding(false)
		}, secondsToGo * 1000);
	};


	const findComponent = (title: string) => {
		return pcData?.find((pd) => pd.category === title)
	}

	const countCost = () => {
		return pcData?.reduce((acc, pd) => acc + pd.price, 0)
	}





	return (
		<div style={{ width: isMobileScreen ? "100%" : "80%", margin: '0 auto' }}>

			<h1 style={{ textAlign: 'center', padding: isMobileScreen ? '5px 0' : '20px 0 0 0', textDecoration: 'underline', fontSize: isMobileScreen ? 30 : 40 }} className={anton.className}>🎉 Make Your Dream PC 🎉</h1>
			{contextHolder}
			<List
				size="large"
				header={<div>Add Required Components</div>}
				footer={<div style={{ textAlign: 'end', fontWeight: 'bold' }}>Total Cost: {countCost() ?? 0} $
					<Button color="green" type="primary" size="large" disabled={(pcData === null || pcData?.length <= 6)} style={{ marginLeft: '20px', }} onClick={() => {
						countDown();

					}}>Complete Build</Button>
				</div>}
				bordered
				dataSource={data}
				renderItem={(item) => <List.Item
					actions={[

						!findComponent(item.title) ? <Button key="list-loadmore-more" onClick={() => {
							setIsPcBuilding(true)
							router.push(item.link)
						}}>Choose</Button> : null, findComponent(item.title) ? <Button key="list-loadmore-more" onClick={() => {
							deleteFromPcBuilder(item.title)
						}} danger>Delete</Button> : null]}
				>
					<Skeleton avatar title={false} loading={false} active>
						<List.Item.Meta
							title={<div>
								<Badge count={findComponent(item.title) ? "Added" : 'Required'} color={findComponent(item.title) ? "green" : 'red'} offset={[40, 10]}>
									{item.title}
								</Badge>
							</div>}
							description={<>
								{findComponent(item.title)?.name}

								{isMobileScreen && findComponent(item.title) && <div>
									<Divider></Divider>
									Price: {findComponent(item.title)?.price} $
									<br />
									Ratings: {findComponent(item.title)?.average_rating} ⭐

								</div>}

							</>}
						/>
						{!isMobileScreen && findComponent(item.title) && <div>
							<Divider></Divider>
							Price: {findComponent(item.title)?.price} $
							<br />
							Ratings: {findComponent(item.title)?.average_rating} ⭐

						</div>}
					</Skeleton>
				</List.Item>}
			/>
		</div>
	);
};

export default PcBuild;
const data = [
	{
		id: 1,
		title: 'CPU',
		required: true,
		link: '/choose/cpu',
	},
	{
		id: 2,
		title: 'Motherboard',
		required: true,
		link: '/choose/motherboard',
	},
	{
		id: 3,
		title: 'RAM',
		required: true,
		link: '/choose/ram',
	},
	{
		id: 4,
		title: 'Storage Device',
		required: true,
		link: '/choose/storage device',
	},
	{
		id: 5,
		title: 'GPU',
		required: true,
		link: '/choose/gpu',
	},
	{
		id: 6,
		title: 'Monitor',
		required: true,
		link: '/choose/monitor',
	},
	{
		id: 7,
		title: 'Power Supply Unit',
		required: true,
		link: '/choose/power supply unit',
	},
]*/

/*import { Badge, Button, Divider, List, Modal, Skeleton, Row, Col, Card } from "antd";
import { useRouter } from "next/router";
import { useContext } from "react";
import { PcContext } from "@/context/PcContext";
import IsMobile from "@/hooks/isMobile";
import { anton } from "../_app";

const PcBuild = () => {
    const router = useRouter();
    const { setIsPcBuilding, pcData, deleteFromPcBuilder, setPcData } = useContext(PcContext);
    const { isMobileScreen } = IsMobile();
    const [modal, contextHolder] = Modal.useModal();

    const countDown = () => {
        let secondsToGo = 5;
        const instance = modal.success({
            title: 'Successfully Built',
            content: `Thank You for ordering the PC, we will reach you soon!`,
        });
        const timer = setInterval(() => {
            secondsToGo -= 1;
            instance.update({
                content: `Thank You for ordering the PC, we will reach you soon!`,
            });
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            instance.destroy();
            setPcData(null);
            setIsPcBuilding(false)
        }, secondsToGo * 1000);
    };

    const findComponent = (title: string) => {
        return pcData?.find((pd) => pd.category === title)
    }

    const countCost = () => {
        return pcData?.reduce((acc, pd) => acc + pd.price, 0)
    }

    return (
        <div style={{ width: isMobileScreen ? "100%" : "80%", margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', padding: isMobileScreen ? '5px 0' : '20px 0 0 0', textDecoration: 'underline', fontSize: isMobileScreen ? 30 : 40 }} className={anton.className}>🎉 Make Your Dream PC 🎉</h1>
            {contextHolder}
            
            <List
                size="large"
                header={<div>Add Required Components</div>}
                footer={<div style={{ textAlign: 'end', fontWeight: 'bold' }}>Total Cost: {countCost() ?? 0} $
                    <Button color="green" type="primary" size="large" disabled={(pcData === null || pcData?.length <= 6)} style={{ marginLeft: '20px', }} onClick={() => { countDown(); }}>Complete Build</Button>
                </div>}
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item actions={[
                        !findComponent(item.title) ? <Button key="list-loadmore-more" onClick={() => { setIsPcBuilding(true); router.push(item.link); }}>Choose</Button> : null, 
                        findComponent(item.title) ? <Button key="list-loadmore-more" onClick={() => { deleteFromPcBuilder(item.title); }} danger>Delete</Button> : null
                    ]}>
                        <Skeleton avatar title={false} loading={false} active>
                            <List.Item.Meta
                                title={<div>
                                    <Badge count={findComponent(item.title) ? "Added" : 'Required'} color={findComponent(item.title) ? "green" : 'red'} offset={[40, 10]}>
                                        {item.title}
                                    </Badge>
                                </div>}
                                description={<>
                                    {findComponent(item.title)?.name}
                                    {isMobileScreen && findComponent(item.title) && <div>
                                        <Divider></Divider>
                                        Price: {findComponent(item.title)?.price} $
                                        <br />
                                        Ratings: {findComponent(item.title)?.average_rating} ⭐
                                    </div>}
                                </>}
                            />
                            {!isMobileScreen && findComponent(item.title) && <div>
                                <Divider></Divider>
                                Price: {findComponent(item.title)?.price} $
                                <br />
                                Ratings: {findComponent(item.title)?.average_rating} ⭐
                            </div>}
                        </Skeleton>
                    </List.Item>
                )}
            />

            {/* Display Selected Components as a Rough Diagram *//*}*/
            /*{pcData?.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h2 style={{ textAlign: 'center' }}>Your PC Build</h2>
                    <Row gutter={[16, 16]} style={{ display: 'flex', justifyContent: 'center' }}>
                        {pcData.map((component) => (
                            <Col span={6} key={component.title}>
                                <Card
                                    hoverable
                                    cover={<img alt={component.title} src={component.image || '/placeholder-image.png'} />}
                                    style={{ textAlign: 'center' }}
                                >
                                    <Card.Meta
                                        title={component.name}
                                        description={`Price: ${component.price} $`}
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
};

export default PcBuild;

const data = [
    { id: 1, title: 'CPU', required: true, link: '/choose/cpu' },
    { id: 2, title: 'Motherboard', required: true, link: '/choose/motherboard' },
    { id: 3, title: 'RAM', required: true, link: '/choose/ram' },
    { id: 4, title: 'Storage Device', required: true, link: '/choose/storage device' },
    { id: 5, title: 'GPU', required: true, link: '/choose/gpu' },
    { id: 6, title: 'Monitor', required: true, link: '/choose/monitor' },
    { id: 7, title: 'Power Supply Unit', required: true, link: '/choose/power supply unit' },
];*/

import { Badge, Button, Divider, List, Modal, Skeleton, Row, Col, Card } from "antd";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import { PcContext } from "@/context/PcContext";
import IsMobile from "@/hooks/isMobile";
import { anton } from "../_app";

const PcBuild = () => {
    const router = useRouter();
    const { setIsPcBuilding, pcData, deleteFromPcBuilder, setPcData } = useContext(PcContext);
    const { isMobileScreen } = IsMobile();
    const [modal, contextHolder] = Modal.useModal();
    const [compatibilityScore, setCompatibilityScore] = useState(0);

    // Compatibility check logic based on total price
    const calculateCompatibility = () => {
        // If no components are selected, set compatibility score to 0
        if (!pcData || pcData.length === 0) {
            setCompatibilityScore(0);
            return;
        }

        // Calculate the total price of selected components
        const totalPrice = pcData.reduce((acc, pd) => acc + (pd.price || 0), 0);

        // Define a maximum possible price (this can be based on your own criteria)
        const maxPrice = 3000; // You can adjust this max price based on your project

        // Calculate the compatibility score as a percentage of the total price
        const score = Math.min((totalPrice / maxPrice) * 100, 100); // Cap the score at 100%

        setCompatibilityScore(score); // Update the state with the calculated score
    };

    const findComponent = (title: string) => {
        return pcData?.find((pd) => pd.category === title);
    };

    const countCost = () => {
        return pcData?.reduce((acc, pd) => acc + (pd.price || 0), 0);
    };

    useEffect(() => {
        calculateCompatibility();
    }, [pcData, calculateCompatibility]); // Recalculate score whenever pcData changes

    // Define the countDown function
    const countDown = () => {
        let secondsToGo = 5;

        const instance = modal.success({
            title: 'Successfully Built',
            content: `Thank You for ordering the PC, we will reach you soon!`,
        });

        const timer = setInterval(() => {
            secondsToGo -= 1;
            instance.update({
                content: `Thank You for ordering the PC, we will reach you soon!`,
            });
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            instance.destroy();
            setPcData(null);  // Reset PC data
            setIsPcBuilding(false); // Reset the building state
        }, secondsToGo * 1000);
    };

    // Define the data array with PC components
    const data = [
        { id: 1, title: 'CPU', required: true, link: '/choose/cpu' },
        { id: 2, title: 'Motherboard', required: true, link: '/choose/motherboard' },
        { id: 3, title: 'RAM', required: true, link: '/choose/ram' },
        { id: 4, title: 'Storage Device', required: true, link: '/choose/storage device' },
        { id: 5, title: 'GPU', required: true, link: '/choose/gpu' },
        { id: 6, title: 'Monitor', required: true, link: '/choose/monitor' },
        { id: 7, title: 'Power Supply Unit', required: true, link: '/choose/power supply unit' },
    ];

    return (
        <div style={{ width: isMobileScreen ? "100%" : "80%", margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', padding: isMobileScreen ? '5px 0' : '20px 0 0 0', textDecoration: 'underline', fontSize: isMobileScreen ? 30 : 40 }} className={anton.className}>🎉 Make Your Dream PC 🎉</h1>
            {contextHolder}

            {/* PC Components List */}
            <List
                size="large"
                header={<div>Add Required Components</div>}
                footer={<div style={{ textAlign: 'end', fontWeight: 'bold' }}>Total Cost: {countCost() ?? 0} $ 
                    <Button color="green" type="primary" size="large" disabled={!(pcData && pcData.length > 6)} style={{ marginLeft: '20px' }} onClick={() => { countDown(); }}>Complete Build</Button>
                </div>}
                bordered
                dataSource={data} // Now this is correctly defined
                renderItem={(item) => (
                    <List.Item actions={[
                        !findComponent(item.title) ? <Button key="list-loadmore-more" onClick={() => { setIsPcBuilding(true); router.push(item.link); }}>Choose</Button> : null, 
                        findComponent(item.title) ? <Button key="list-loadmore-more" onClick={() => { deleteFromPcBuilder(item.title); }} danger>Delete</Button> : null
                    ]}>
                        <Skeleton avatar title={false} loading={false} active>
                            <List.Item.Meta
                                title={<div>
                                    <Badge count={findComponent(item.title) ? "Added" : 'Required'} color={findComponent(item.title) ? "green" : 'red'} offset={[40, 10]}>
                                        {item.title}
                                    </Badge>
                                </div>}
                                description={<>
                                    {findComponent(item.title)?.name}
                                    {isMobileScreen && findComponent(item.title) && <div>
                                        <Divider></Divider>
                                        Price: {findComponent(item.title)?.price} $<br />
                                        Ratings: {findComponent(item.title)?.average_rating} ⭐
                                    </div>}
                                </>}
                            />
                            {!isMobileScreen && findComponent(item.title) && <div>
                                <Divider></Divider>
                                Price: {findComponent(item.title)?.price} $<br />
                                Ratings: {findComponent(item.title)?.average_rating} ⭐
                            </div>}
                        </Skeleton>
                    </List.Item>
                )}
            />

            {/* Display Selected Components as a Rough Diagram */}
            {pcData && pcData.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h2 style={{ textAlign: 'center' }}>Your PC Build</h2>
                    <Row gutter={[16, 16]} style={{ display: 'flex', justifyContent: 'center' }}>
                        {pcData.map((component) => (
                            <Col span={6} key={component.title}>
                                <Card
                                    hoverable
                                    cover={<img alt={component.title} src={component.image || '/placeholder-image.png'} />}
                                    style={{ textAlign: 'center' }}
                                >
                                    <Card.Meta
                                        title={component.name}
                                        description={`Price: ${component.price} $`}
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}

            {/* Compatibility Score Display */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <h3>Compatibility Score</h3>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{compatibilityScore}%</p>
                <Button onClick={calculateCompatibility} type="primary">Recalculate Compatibility</Button>
            </div>

            {/* New Component: Learn More About Compatibility */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <h3>Learn More About Enhancing Compatibility</h3>
                <a href="https://pcpartpicker.com/guide/" target="_blank" style={{ fontSize: '18px', color: '#1890ff', textDecoration: 'underline' }}>
                    Click here to learn how to enhance the compatibility of your components
                </a>
                <h4>Need recommendations?</h4>
                <a href="https://airecsystem-rl2bfrzidbpdpdzqnrjb58.streamlit.app/" target="_blank" style={{ fontSize: '18px', color: '#1890ff', textDecoration: 'underline' }}>
                    Check out the AI-based recommendation system
                </a>
            </div>
        </div>
    );
};

export default PcBuild;
