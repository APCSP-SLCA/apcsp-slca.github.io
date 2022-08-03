# Unit 0: Hardware Layer

Computers tend to use binary because it's easier to represent two states in the physical world:

* 0 is "off"
* 1 is "on"
    * Light bulbs just need electricity to turn on or off
    * Electricity is sufficient to turn a switch on or off

Computers also have billions of switches called **transitors**! Using these transistors we can store values, store data, compute, and do everything we can with computers.

## CPU

If you have heard that your computer has "Intel Inside," it has an Intel processor in it

![CPU](cpu.png)

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
* CPUs now also support hyper-threading
    * a single core will present itself as multiple cores to a computer's operating system
* Systems on a Chip (SoaC) are when a CPU and more are all interconnected at once rather than attached to a motherboard
    * Popular in phones, tables, and game consoles
    * Raspberry Pi

![raspberry pi](pi.png)

## RAM (Random Access Memory)

- Circuit board with chips that slides into a slot on the motherboard

  ![ram](ram.png)
  - The chips store data
    - Only stores data when the power is on
  - Files and programs are loaded onto these chips when ran
  - Fast memory
- You can check your RAM and other specs:
  - Windows Task Manager

    ![windows task manager](windows.png)
    - CPU chart shows when peak usage occurs
    - GHz is the number of operations a CPU can perform per second (in billions)
      - 1.94 GHz = 1.94 billion operations per second
    - Logical processors in this case is 4, which means both cores support hyper-threading
      - Each core will do two things at once as if 4 cores exist
  - Mac System Profiler

    ![mac](mac.png)

## Hard Drives

- When you turn a computer off, you need a place to store data
  - A hard disk drive (HDD) stores this information

    ![hard drive exterior](hddout.png)
  - RAM may store 1 GB, 2 GB, 4 GB, through 16 GB or so
  - HDD stores 256 GB, 1024 GB (AKA terabyte or TB), 2 TB
  - Inside a HDD, metal platters physically spin around

    ![hard drive interior](hddinside.png)

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

  ![solid state drive exterior](ssdout.png)
  - Smaller (3.5 inch width for HDD vs 2.5 inch width for SSD)
    - Still fits where old HDDs are
  - No moving particles
  - Inside, it looks a lot like RAM

    ![solid state drive interior](ssdinside.png)
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

  ![memory heirarchy](memory_heirarchy.png)

    - Theoretically, the CPU never has to wait for data to crunch
    - There is a tiny amount of memory (bytes) called registers where numbers are stored for operations.
    - Memory at the bottom is more expensive
    - Disk is important for the long-term storage
    - RAM is important as it stores programs you use simultaneously
    - L3, L2, L1 cache are on the motherboard
- As an analogy for memory, picture a candy store
  - A customer approaches the counter and requests candy
  - The shop owner then leaves the counter to grab the candy before returning moments later
    - Not super efficient to walk all the way to the store room to grab candy
      - Better to have a cache of memory
  - Instead, the shop owner leaves the counter to ready a cache of candy before the customers arrive
  - When a customer comes, the candy can be distributed quickly
    - Cache memory similarly helps the CPU in this manner
- We can see sizes of cache looking at computer specs like before

## Display Connectors

![display](display.png)

- These sockets all connect to monitors or displays
- Mini DisplayPort are used form monitors
- HDMI is not only on laptops and computers but also TVs
- VGA is older, but still commonly uses on projectors

## USB (Universal Serial Bus)

![usb](usb.png)
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

## Operating System (OS)

- Software that ensures all devices work and can intercommunicate
- MacOS and Windows are popular OS
- Can be installed by the user, but is typically done so by a manufacturer
  - Installed on HDD or SDD so that it exists persistently without power
- When you hit power on your computer, the OS is loaded into RAM
- Gives you the graphical interface that you see
- Knows how to:
  - Talk to your keyboard and mouse
  - Display info on the screen
  - Move things around in memory
- This is all thanks to device drivers installed with the OS
  - Special software designed to talk to certain model of printer, camera, scanner, etc.
- When an OS doesn't recognize a device, perhaps because it's too new, you can download new device drives from the device manufacturer
  - Teaches Window, MacOS, or Linux about that new hardware
  - Future-proofing structure
- It's this intersection of hardware and software that makes computers powerful!

# Reference Sheets

    * [Computers and Computing](https://ap.cs50.school/assets/pdfs/computers_and_computing.pdf)
    * [CPU and SoC](https://ap.cs50.school/assets/pdfs/cpu_and_soc.pdf)
    * [Cybersecurity](https://ap.cs50.school/assets/pdfs/cybersecurity.pdf)
    * [How Computers Work](https://ap.cs50.school/assets/pdfs/how_computers_work.pdf)
    * [Memory](https://ap.cs50.school/assets/pdfs/memory.pdf)
    * [Routers](https://ap.cs50.school/assets/pdfs/routers.pdf)
    * [Transistors and Logic](https://ap.cs50.school/assets/pdfs/transistors_and_logic.pdf)
    * [Trust Models](https://ap.cs50.school/assets/pdfs/trust_models.pdf)
    * [Virtual and Augmented Reality](https://ap.cs50.school/assets/pdfs/virtual_and_augmented_reality.pdf)