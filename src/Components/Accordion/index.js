import './index.css';
import { useCallback, useState, } from 'react';

const InternalAccordionItem = ({
    activeItemIds,
    toggle,
    item: { id, title, content },
}) => {
    const isActive = activeItemIds.has(id)
    return (
        <div>
            <h2
                className="AccordionHeader"
                onClick={useCallback(() => toggle(id), [toggle, id])}
            >
                {isActive ? '-' : '+'} {title}
            </h2>
            {isActive && <div className="AccordionContent">{content}</div>}
        </div>
    )
}

export const Accordion = ({ items }) => {
    const [activeItemIds, setActiveItemIds] = useState(new Set());
    const toggle = useCallback((id) => {
        setActiveItemIds((current) => {
            const nextItemIds = new Set(current)
            if (nextItemIds.has(id)) {
                nextItemIds.delete(id)
            } else {
                nextItemIds.add(id)
            }
            return nextItemIds
        })
    }, []);

    return (
        <div>
            {items.map((item) => (
                <InternalAccordionItem
                    key={item.id}
                    activeItemIds={activeItemIds}
                    toggle={toggle}
                    item={item}
                />
            ))}
        </div>
    )
}