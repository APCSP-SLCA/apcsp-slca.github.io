# Hardware Layer

## CPU

If you have heard that your computer has "Intel Inside," it has an Intel processor in it

![CPU]({{ '/assets/images/cpu.png' | relative_url }})

* The backside of the processor has pins that connect into the motherboard
* The motherboard is a circuit board made of silicon
* The CPU is the brain of the computer
    * Does all the thinking
    * Performs math in numbers fed to it
    * Helps display numbers on a screen
    * Adds or deletes numbers

* CPUs now can have multiple cores
* Cores are the devices inside the CPU that can preform mathematical operations, load info from memory, save info to memory, etc.
    * The more cores, the more tasks a CPU can do at once
* Systems on a Chip (SoaC) are when a CPU and more are all interconnected at once rather than attached to a motherboard
    * Popular in phones, tables, and game consoles
    * Raspberry Pi

![raspberry pi]({{ '/assets/images/pi.png' | relative_url }})

## RAM (Random Access Memory)

- Circuit board with chips that slides into a slot on the motherboard

  ![ram]({{ '/assets/images/ram.png' | relative_url }})
  - The chips store data
    - Only stores data when the power is on
  - Files and programs are loaded onto these chips when ran
  - Fast memory
- You can check your RAM and other specs:
  - Windows Task Manager

    ![windows task manager]({{ '/assets/images/windows.png' | relative_url }})
    - CPU chart shows when peak usage occurs
    - GHz is the number of operations a CPU can perform per second (in billions)
      - 1.94 GHz = 1.94 billion operations per second
    - Logical processors in this case is 4, which means both cores support hyper-threading
      - Each core will do two things at once as if 4 cores exist
  - Mac System Profiler

    ![mac]({{ '/assets/images/mac.png' | relative_url }})

## Hard Drives

- When you turn a computer off, you need a place to store data
  - A hard disk drive (HDD) stores this information

    ![hard drive exterior]({{ '/assets/images/hddout.png' | relative_url }})
  - RAM may store 1 GB, 2 GB, 4 GB, through 16 GB or so
  - HDD stores 256 GB, 1024 GB (AKA terabyte or TB), 2 TB
  - Inside a HDD, metal platters physically spin around

    ![hard drive interior]({{ '/assets/images/hddinside.png' | relative_url }})

      - Data is stored on these disks
      - The reading heads move back and forth reading data from the device
      - Uses tiny magnetic particles where north pole orientation represents 1 and south pole orientation represents 0
        - Power is only needed to read or change the data
          - Data is preserved when power is off
      - David shows a video of a HDD running in slowmo
- To store data in a hard drive, RAM sends data and instructions to the HDD
  - The hard drive translates that data into voltage fluctuations
    - Some signals spin the platters, others move the read/write heads
    - Pulses sent to the read/write head turn on a magnet which creates a field that changes the polarity of a tiny portion of the metal platter's surface
    - Power is sent in different directions as to change polarity
  - To read, the particles on the disk use their charge to move the read/write head.
  - Pieces of a file can be spread out around the platters
    - A special file keeps track of data's location
  - Anytime you have a physical device that moves over a period of time, things go wrong
    - Dropping a HDD can corrupt files
  - Platters spin slower than how fast electrons move

## Flash Memory

- Solid state disk (SSD)

  ![solid state drive exterior]({{ '/assets/images/sddout.png' | relative_url }})
  - Smaller (3.5 inch width for HDD vs 2.5 inch width for SSD)
    - Still fits where old HDDs are
  - No moving particles
  - Inside, it looks a lot like RAM

    ![solid state drive interior]({{ '/assets/images/sddinside.png' | relative_url }})
  - Much faster than HDD
    - Programs/files load and save more quickly
  - SSD theoretically don't last as long as HDD
    - Finite number of writes
- Hybrid Drives
  - Some GB of solid state memory and more GB or TB of HDD space
  - Stores as much of frequently-needed data on the SSD
  - Stores less frequently-needed data on HDD
- Flash memory also exists in the form of USB sticks
  - Might store 1 GB, 16 GB, or more
  - Portable
- External SSDs exist for more storage
  - Might store 256 GB or more
  - Can be used to share data with others without network usage
- Can also have external HDD

## The Memory Heirarchy

- There is a tradeoff between space, money, and speed of data transfer

  ![memory heirarchy]({{ '/assets/images/memory_heirarchy.png' | relative_url }})

    - Theoretically, the CPU never has to wait for data to crunch
    - There is a tiny amount of memory (bytes) called registers where numbers are stored for operations.
    - Memory at the bottom is more expensive
    - Disk is important for the long-term storage
    - RAM is important as it stores programs you use simultaneously
- As an analogy for memory, picture a candy store
  - A customer approaches the counter and requests candy
  - The shop owner then leaves the counter to grab the candy before returning moments later
    - Not super efficient to walk all the way to the store room to grab candy
      - Better to have a cache of memory
  - Instead, the shop owner leaves the counter to ready a cache of candy before the customers arrive
  - When a customer comes, the candy can be distributed quickly

## Display Connectors

![display]({{ '/assets/images/display.png' | relative_url }})

- These sockets all connect to monitors or displays
- Mini DisplayPort are used form monitors
- HDMI is not only on laptops and computers but also TVs
- VGA is older, but still commonly uses on projectors

## USB (Universal Serial Bus)

![usb]({{ '/assets/images/usb.png' | relative_url }})
- Can plug in a whole range of peripheral devices including printers, keyboards, mice, scanners, etc.
- USB-A most common
- USB-B is often used for printers and scanners
- USB-C is newer and can be plugged in coming from different directions
- Other variants often exist for phones
- Older USB connections are slower when transferring data
  - Hard drives can connect via USB
    - Even if a hard drive is fast, if the USB is slow, the transfer of data will be slow

## Wireless

- Wifi is wireless internet
- Bluetooth allows devices such as wireless keyboards and headphones to connect to your computer
  - Limited range
    - This is ok as it is used for you to connect to your own device

## Extra Resources

* <a href="https://docs.google.com/viewer?url=https://github.com/APCSP-SLCA/slides/raw/main/hardware/slides.pdf" target="_blank">Slides</a>



<!-- * [Computers and Computing](https://ap.cs50.school/assets/pdfs/computers_and_computing.pdf)
* [CPU and SoC](https://ap.cs50.school/assets/pdfs/cpu_and_soc.pdf)
* [How Computers Work](https://ap.cs50.school/assets/pdfs/how_computers_work.pdf)
* [Memory](https://ap.cs50.school/assets/pdfs/memory.pdf) -->