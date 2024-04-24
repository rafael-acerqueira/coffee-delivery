import styled from 'styled-components'

export const DeveliryWrapper = styled.div`
  margin: 0 auto;
  width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: self-end;
  margin-top: 5rem;

`

export const DeliveryWrapperTitle = styled.h1`
  font-size: 2rem;
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  color: var(--yellow-dark);
`

export const DeliveryWrapperSubtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--base-subtitle);
`

export const DeliveryInfoBox = styled.div`
  margin-top: 2.5rem;
  height: 16.875rem;
  padding: 2.5rem 0 0 2.5rem;
  border: 1px solid transparent;
  border-radius: 10px 40px 10px 40px;
  background: linear-gradient(var(--background), var(--background)) padding-box,
              linear-gradient(to right, var(--yellow), var(--purple)) border-box;
`

export const DeliveryInfoBoxItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const iconTypes = {
  localization: "var(--purple)",
  deliveryTime: "var(--yellow)",
  payment: "var(--yellow-dark)"
}

interface iconTypesProps {
  iconType: 'localization' | 'deliveryTime' | 'payment'
}

export const DeliveryIconContainer = styled.div<iconTypesProps>`
  background-color: ${props => iconTypes[props.iconType]};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DeliveryInfo = styled.div`
  color: var(--base-text);
  display: flex;
  flex-direction: column;
  margin-left: 0.75rem;
`