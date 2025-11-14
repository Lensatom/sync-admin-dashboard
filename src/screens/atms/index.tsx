import { Card } from "@/components/layout/card";
import { Container } from "@/components/layout/container";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function Atms() {
  return (
    <>
      <Header
        title="ATMs Overview"
        subtitle="Overview of the ATMs in your bank"
      />
      <Container className='mt-10'>
        <Card className='!p-0'>
          <div className='flex items-start px-6 py-5'>
            <h2 className='text-gray.12 font-medium'>All ATMs (8)</h2>
          </div>

          <Table>
            <TableHeader>
              <TableRow className='px-6 text-xs font-semibold text-gray.12'>
                <TableHead className='min-w-[267px]'>ATM ID</TableHead>
                <TableHead>Last Heartbeat</TableHead>
                <TableHead>Cash Level</TableHead>
                <TableHead>Amount Inside</TableHead>
                <TableHead>Health Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4].map((item) => (
                <TableRow className='px-6' key={item}>
                  <TableCell className="font-medium">ATM #978-LFG-G56</TableCell>
                  <TableCell>11:59am, Sep 08, 2024</TableCell>
                  <TableCell>Processing</TableCell>
                  <TableCell>₦ 120,000</TableCell>
                  <TableCell>Warning</TableCell>
                  <TableCell className="text-right flex items-center gap-3">
                    <Button pill size="sm" variant="outline" className="font-medium">View More</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Container>
    </>
  )
}