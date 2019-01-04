import React from 'react'
import styled from 'styled-components'

import { Box } from './design/ui'
import { TypographicContext } from './design'

const Parent = styled.div`
  transform: translateY(0);
  display: flex;
  justify-content: center;
  width: 100%;
`
export const Direction = React.memo(() => (
  <section className="section">
    <div className="container">
      <Parent>
        <Box title="Direction">
          <TypographicContext>
            <p style={{ fontSize: '2rem' }}>การเดินทาง</p>
            <ul className="nes-list is-disc">
              <li>
                <b>รถประจำทาง</b> มีป้ายรถประจำทางอยู่ทั้งสองประตูของโรงเรียน
                <br />
                ถนนพญาไท: 21, 25, 29, 34, 36, 40, 47, 50, 93, 113, 141, 187, 542
                <br />
                ถนนอังรีดูนังต์: 16, 21
              </li>
              <br />
              <li>
                <b>รถไฟฟ้า BTS สถานีสยาม</b>{' '}
                โดยสามารถเดินต่อมายังโรงเรียนเตรียมอุดมศึกษาได้ทั้งฝั่งถนนพญาไท
                (900 เมตร) และถนนอังรีดูนังต์ (500-800 เมตร)
              </li>
              <br />
              <li>
                <b>รถไฟฟ้า MRT สถานีสามย่าน</b>{' '}
                โดยสามารถเดินต่อมายังโรงเรียนเตรียมอุดมศึกษาได้ทั้งฝั่งถนนพญาไท
                (800 เมตร) และถนนอังรีดูนังต์ (1200 เมตร)
              </li>
            </ul>
            <p style={{ fontSize: '2rem' }}>ประตูโรงเรียน</p>
            <ul className="nes-list is-disc">
              <li>
                ประตูถนนพญาไท (ตึก 1) ใกล้กับคณะสถาปัตยกรรมศาสตร์
                จุฬาลงกรณ์มหาวิทยาลัย
              </li>
              <br />
              <li>
                ประตูถนนอังรีดูนังต์ (ตึก 3){' '}
                เชื่อมต่อกับโรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒ ปทุมวัน
                และคณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
              </li>
            </ul>
            <ul>
              <li style={{ color: 'red' }}>
                ปิดประตูถนนอังรีดูนังต์ (ตึก 50 ปี)
                ใกล้เคียงกับคณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
              </li>
            </ul>
          </TypographicContext>
        </Box>
      </Parent>
    </div>
  </section>
))
