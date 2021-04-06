
import React from 'react'
import styled from 'styled-components'
import { Breadcrumb, Breadcrumbs } from '..'
import { NDivider } from '../Divider/NDivider'
const Container = styled.div`
display:flex;
min-height:500px;
position:relative;
flex-direction:column;
width: 100vw;
padding: 0 5rem;
`
const BreadcrumbWrapper = styled.div`
    padding: 7px 0;
`
const DetailWrapper = styled.div`
    padding: 0 10px;
    margin-top: 12px;
    display:flex;
`
const NRow = styled.div`
display:flex;
`
const NColumn = styled.div`
display:flex;
flex-direction:column;
`
const MOCK_LINK: Breadcrumb[] = [{
    link: 'Demo1', value: 'Demo1'
}, {
    link: 'Demo2', value: 'Demo2'

}, {
    link: 'Demo3', value: 'Demo3'

}, {
    link: 'Demo4', value: 'Demo4'
}]
export const ProductDetail: React.FC = () => {
    return (<Container>
        <BreadcrumbWrapper>
            <Breadcrumbs breadcrumbs={MOCK_LINK} />
        </BreadcrumbWrapper>
        <DetailWrapper>
            <div style={{ display: 'flex', flex: 2 }}>
                <img src="https://sc04.alicdn.com/kf/U7c30570cd9b54458bf3b4717425e87f7c.jpg" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 3 }}>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '8px 16px' }}>
                    <div>Fresh valencia orange / orange fruit from Vietnam - Wholesale for fresh orange / navel orange</div>
                    <div style={{ marginTop: 12 }}>
                        FOB Reference Price: <a href="#" target="_blank">Get Latest Price</a>
                    </div>
                    <NDivider size="md" />
                    <NDivider size={1} lineSize={1} lineColor={'red'} />
                </div>
            </div>
        </DetailWrapper>
    </Container >)
}